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
} from '@/modules/Organization/args'

@Injectable()
export class OrganizationService {
  async createOrganization(args: CreateOrganizationArgs) {
    const organizationId = getRandomId()
    try {
      await collections.organization.doc(organizationId).create({
        organizationId,
        organizationName: args.organizationName,
        organizationOwnerIds: [args.organizationOwnerId],
        shopIds: [args.shopId],
      })
    } catch (e) {
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
    let ret

    try {
      const snapshot = await collections.organization
        .doc(args.organizationId)
        .get()
      if (!snapshot.exists) {
        return new NotFoundException()
      }
      ret = snapshot.data() as Organization
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
}
