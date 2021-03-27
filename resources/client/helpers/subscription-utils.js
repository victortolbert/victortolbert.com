import subscriptionPlanJson from '~/utils/subscription-plan-data.json'

export const getPlan = function (planId) {
  const plans = subscriptionPlanJson.plans

  return plans.find(p => {
    const planIds = [
      p.month && p.month.stripeId.dev,
      p.month && p.month.stripeId.prod,
      p.year && p.year.stripeId.dev,
      p.year && p.year.stripeId.prod,
    ]

    return planIds.includes(planId)
  })
}

// for use when the user is pro, but might have a plan from before we tracked
export const getPlanWithDefault = function (planId) {
  return getPlan(planId) || subscriptionPlanJson.plans.find(p => p.id === 2)
}
