class FamilyPledging {
  /**
   * Create a new FamilyPledging instance.
   *
   * @param {Array} programsArray
   * @param {integer} participantUserId
   */
  constructor(programsArray, participantUserId) {
    this.currentParticipant = undefined
    this.isFamilyPledgingOn = false
    this.smallestIdParticipantInCurrentParticipantProgram = undefined

    let currentParticipantProgram

    programsArray.forEach((program) => {
      program.participants.forEach((participant) => {
        if (participant.id === participantUserId) {
          // Capture current participant object
          this.currentParticipant = participant
          currentParticipantProgram = program

          const isProgramFamilyPledging = program.program_pledge_setting.family_pledging_enabled === 1
          const isParticipantFamilyPledging = participant.participant_info.family_pledging_enabled === 1
          this.isFamilyPledgingOn = isProgramFamilyPledging && isParticipantFamilyPledging
        }
      })
    })

    // Track smallest id participant for current participant's program
    if (currentParticipantProgram) {
      this.smallestIdParticipantInCurrentParticipantProgram = currentParticipantProgram.participants
        .reduce((min, current) => min.id < current.id ? min : current)
    }
  }

  isFamilyPledgingEnabled() {
    return this.isFamilyPledgingOn
  }

  getCurrentParticipant() {
    return this.currentParticipant
  }

  getSmallestIdParticipantInCurrentParticipantProgram() {
    return this.smallestIdParticipantInCurrentParticipantProgram
  }
}

export default FamilyPledging
