import {
  PLEDGE_TYPE_FLAT,
  STATUS_CONFIRMED,
  STATUS_PAID,
  STATUS_PAYMENT_SCHEDULED,
} from '~/store/modules/pledge'

class PledgeTotalCalculator {
  /**
   * Create a new calculator instance.
   *
   * @param {object} program
   * @param {Array} pledges
   */
  constructor(program, pledges, statusIds = undefined) {
    this.program = program
    this.pledges = pledges

    this.statusIds = typeof (statusIds) !== 'undefined'
      ? statusIds
      : [
          STATUS_CONFIRMED,
          STATUS_PAID,
          STATUS_PAYMENT_SCHEDULED,
        ]
  }

  getTotalAsFlat() {
    const flatAmountExtractor = pledge => pledge.pledge_type_id === PLEDGE_TYPE_FLAT
      ? pledge.amount
      : pledge.amount * this.program.unit_flat_conversion

    return this.getTotal(flatAmountExtractor)
  }

  getTotalAsPPL() {
    const pplAmountExtractor = (pledge) => {
      if (pledge.pledge_type_id === PLEDGE_TYPE_FLAT) {
        if (this.program.unit_flat_conversion === 0)
          return 0

        return pledge.amount / this.program.unit_flat_conversion
      }
      else {
        return pledge.amount
      }
    }

    return this.getTotal(pplAmountExtractor)
  }

  getTotal(amountExtractor) {
    return this.pledges
      .filter(pledge => this.statusIds.includes(pledge.pledge_status_id))
      .map(amountExtractor)
      .reduce((total, pledge) => total + pledge, 0)
  }
}

export default PledgeTotalCalculator
