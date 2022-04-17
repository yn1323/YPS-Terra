import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { collections, getRandomId } from '@/firebase/common'
import { Organization } from '@/models/Organization'
import {
  CreateOrganizationArgs,
  GetOrganizationArgs,
  GetOrganizationByShopIdArgs,
} from '@/modules/Organization/args'

@Injectable()
export class OrganizationService {
  createOrganizationData(
    args: CreateOrganizationArgs & { organizationId: string }
  ) {
    return {
      organizationId: args.organizationId,
      organizationName: args.organizationName,
      organizationOwnerIds: [args.organizationOwnerId],
      shopIds: [args.shopId],
    }
  }

  async createOrganization(args: CreateOrganizationArgs) {
    const organizationId = getRandomId()

    const result = await collections.organization
      .doc(organizationId)
      .create(this.createOrganizationData({ ...args, organizationId }))
      .catch(e => console.log(e))
    if (!result) {
      return new BadRequestException()
    }

    return {
      organizationId,
      organizationName: args.organizationName,
      shopIds: [args.shopId],
      organizationOwnerIds: [args.organizationOwnerId],
    }
  }

  async findOneByOrganizationId(args: GetOrganizationArgs) {
    const snapshot = await collections.organization
      .doc(args.organizationId)
      .get()
      .catch(e => console.log(e))

    if (!snapshot) {
      return new BadRequestException()
    }

    if (!snapshot.exists) {
      return new NotFoundException()
    }
    const ret = snapshot.data() as Organization

    return ret
  }

  async findOrganizationsByShopId(args: GetOrganizationByShopIdArgs) {
    const snapshot = await collections.organization
      .where('shopIds', 'array-contains', args.shopId)
      .get()

    const ret: Organization[] = []
    snapshot.forEach(d => ret.push(d.data() as Organization))

    return ret
  }
}
