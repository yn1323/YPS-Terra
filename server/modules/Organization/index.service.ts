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
  GetOrganizationsByShopIdsArgs,
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

  async findOrganizationsByShopIds({ shopIds }: GetOrganizationsByShopIdsArgs) {
    const snapshot = await Promise.all(
      shopIds.map(
        async shopId =>
          await collections.organization
            .where('shopIds', 'array-contains', shopId)
            .get()
      )
    )
    const organizations: Organization[] = []
    snapshot.forEach(a =>
      a.forEach(b => organizations.push(b.data() as Organization))
    )

    return organizations
  }
}
