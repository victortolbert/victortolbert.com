<script lang="ts">
import {defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const {t} = useI18n()
    return {t}
  }
})
</script>

<template>
  <PageWrapper>
    <PageHeading>
      {{ t('spf_overview') }}
    </PageHeading>

    <SectionWrapper class="grid grid-cols-6 gap-8">
      <nav aria-label="Progress" class="col-span-2">
        <ol class="overflow-hidden">
          <li class="relative pb-10">
            <!-- Complete Step -->
            <div
              class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary-600"
              aria-hidden="true"
            />

            <a href="#" class="relative flex items-start group">
              <span class="flex items-center h-9">
                <span
                  class="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 group-hover:bg-primary-800"
                >
                  <BaseIconSolid name="check" class="text-white" />
                </span>
              </span>
              <span class="flex flex-col min-w-0 ml-4">
                <span class="text-xs font-semibold tracking-wide uppercase"
                  >Access Needs</span
                >
                <span class="text-sm text-gray-500"
                  >Vitae sed mi luctus laoreet.</span
                >
              </span>
            </a>
          </li>

          <!-- Buid Capacity -->
          <li class="relative pb-10">
            <!-- Current Step -->
            <div
              class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
              aria-hidden="true"
            />
            <a
              href="#"
              class="relative flex items-start group"
              aria-current="step"
            >
              <span class="flex items-center h-9" aria-hidden="true">
                <span
                  class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-primary-600"
                >
                  <span class="h-2.5 w-2.5 bg-primary-600 rounded-full"></span>
                </span>
              </span>
              <span class="flex flex-col min-w-0 ml-4">
                <span
                  class="text-xs font-semibold tracking-wide uppercase text-primary-600"
                  >Build Capacity</span
                >
                <span class="text-sm text-gray-500"
                  >Cursus semper viverra facilisis et et some more.</span
                >
              </span>
            </a>
          </li>

          <!-- Strategic Planning -->
          <li class="relative pb-10">
            <div
              class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
              aria-hidden="true"
            />
            <a href="#" class="relative flex items-start group">
              <span class="flex items-center h-9" aria-hidden="true">
                <span
                  class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
                >
                  <span
                    class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                  />
                </span>
              </span>
              <span class="flex flex-col min-w-0 ml-4">
                <span
                  class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
                  >Strategic Planning</span
                >
                <span class="text-sm text-gray-500"
                  >Penatibus eu quis ante.</span
                >
              </span>
            </a>
          </li>

          <!-- Implementation -->
          <li class="relative pb-10">
            <div
              class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
              aria-hidden="true"
            ></div>
            <a href="#" class="relative flex items-start group">
              <span class="flex items-center h-9" aria-hidden="true">
                <span
                  class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
                >
                  <span
                    class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                  ></span>
                </span>
              </span>
              <span class="flex flex-col min-w-0 ml-4">
                <span
                  class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
                  >Implement</span
                >
                <span class="text-sm text-gray-500"
                  >Faucibus nec enim leo et.</span
                >
              </span>
            </a>
          </li>

          <!-- Evaluation -->
          <li class="relative">
            <a href="#" class="relative flex items-start group">
              <span class="flex items-center h-9" aria-hidden="true">
                <span
                  class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
                >
                  <span
                    class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                  ></span>
                </span>
              </span>
              <span class="flex flex-col min-w-0 ml-4">
                <span
                  class="text-xs font-semibold tracking-wide text-gray-500 uppercase"
                  >Evaluation</span
                >
                <span class="text-sm text-gray-500"
                  >Iusto et officia maiores porro ad non quas.</span
                >
              </span>
            </a>
          </li>
        </ol>
      </nav>

      <div class="col-span-4 prose">
        <p>
          The five steps that comprise SAMHSA’s Strategic Prevention Framework
          will enable States and communities to build the infrastructure
          necessary for effective and sustainable prevention. Each step contains
          key milestones and products that are essential to the validity of the
          process.
        </p>

        <p>
          <strong>Note</strong> In order to ensure complete adherence to the
          SAMHSA SPF model, these notes have been derived from the SAMHSA
          website and other SAMHSA materials. For more information, go to
          www.SAMHSA.org
        </p>

        <h2>Play Narration</h2>

        <audio controls="controls">
          <source
            src="http://resources.ga-sps.org/content/spf/spf-overview-introduction.m4a"
            type=""
          />
        </audio>

        <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
          <li class="step-1">
            <h3 class="cbp-nttrigger">
              <i class="flaticon-flag24"></i> Assess Needs
            </h3>

            <div class="cbp-ntcontent open-container">
              <h2>Play Narration</h2>
              <audio controls="controls">
                <source
                  src="http://resources.ga-sps.org/content/spf/spf-assess-needs.m4a"
                  type=""
                />
              </audio>

              <p>
                <b>Step 1</b> of the Strategic Prevention Framework (SPF) helps
                prevention professionals assess community needs, resources, and
                readiness to address substance misuse.
              </p>

              <p>
                In Step 1 of SAMHSA’s Strategic Prevention Framework (SPF),
                prevention professionals gather and assess data from a variety
                of sources to ensure that substance misuse prevention efforts
                are appropriate and targeted to the needs of communities.
              </p>

              <p>
                Data help to inform the identification and prioritization of
                substance misuse problems, clarify those problems’ impact on
                communities and vulnerable populations, and assess the readiness
                and resources needed to protect against those problems and their
                consequences. Learn more about
                <a
                  href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step1-assess-needs/assess-community-resources-readiness"
                >
                  assessing community resources and readiness.</a
                >
              </p>

              <p>
                Data from
                <a
                  href="http://www.samhsa.gov/capt/practicing-effective-prevention/epidemiology-prevention/epidemiological-profiles"
                >
                  epidemiological profiles for states and jurisdictions</a
                >
                and other sources may also show what risk and protective factors
                are present in the community.
              </p>

              <p>
                Based on their assessment of needs, resources, and readiness,
                prevention professionals identify one or more priorities on
                which to focus their prevention efforts.
              </p>

              <ul class="cbp-ntsubaccordion">
                <li>
                  <h4 class="cbp-nttrigger">Determining Problem Impact</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Using one or more data sources, you can determine what
                      needs and challenges exist in your community. As you
                      <a
                        href="http://www.samhsa.gov/capt/practicing-effective-prevention/epidemiology-prevention/finding-analyzing-data"
                      >
                        analyze the data</a
                      >, ask yourself the following questions:
                    </p>
                    <ul>
                      <li>
                        What are the community’s most pressing problems and
                        related behaviors?
                      </li>
                      <li>
                        How often are the problems occurring? What are the
                        associated issues?
                      </li>
                      <li>
                        Where are they occurring? Do
                        <a href="http://www.samhsa.gov/specific-populations">
                          sub-populations</a
                        >
                        exhibit different substance use patterns?
                      </li>
                      <li>
                        Which populations experience the problems the most? Are
                        sub-populations experiencing different problems or
                        consequences?
                      </li>
                      <li>
                        Are there particular places, times, or sub-populations
                        that seem to be “driving the data”?
                      </li>
                      <li>Are there specific outcomes that stand out?</li>
                    </ul>
                    <p>
                      Data may reveal that the community has multiple areas of
                      need that are contributing to substance misuse. Use
                      <a
                        href="http://www.samhsa.gov/capt/tools-learning-resources/criteria-analyzing-assessment-data"
                        >criteria for analyzing assessment data</a
                      >
                      to guide your decision on which problem to make your
                      priority.
                    </p>
                  </div>
                </li>
                <li>
                  <h4 class="cbp-nttrigger">
                    Assessing Risk and Protective Factors
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Every problem is related to its own set of risk and
                      protective factors. After you have selected your
                      prevention priority, assess the factors that are driving
                      or alleviating the problem.
                    </p>
                    <p>
                      As the name suggests, risk factors can make certain
                      problems more likely to occur, and protective factors
                      reduce the chance of certain problems occurring.
                      Identifying which risk factors exist in your community
                      could reveal possible areas of need. For example, after
                      your assessment you may determine that neighborhood
                      poverty is a risk factor in your community. Consequently,
                      you identify it as a potential prevention priority.
                    </p>
                    <p>
                      Your assessment may also reveal protective factors, such
                      as afterschool activities. These protective factors may be
                      used as resources to support your prevention efforts.
                    </p>
                    <p>
                      The factors driving a problem in one community may differ
                      from the factors driving it in another community. One of
                      the most important lessons learned from prevention
                      research is that, to be effective, prevention strategies
                      must address the underlying factors driving a problem. It
                      doesn’t matter how carefully a program or intervention is
                      implemented. If it’s not a good match for the problem,
                      it’s not going to work.
                    </p>
                    <p>
                      <a
                        href="http://www.samhsa.gov/capt/practicing-effective-prevention/prevention-behavioral-health/risk-protective-factors"
                        >Learn more about risk and protective factors.</a
                      >
                    </p>
                  </div>
                </li>
                <li>
                  <h4 class="cbp-nttrigger">Publications and Resources</h4>
                  <div class="cbp-ntcontent">
                    <ul>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/sources-consequence-data-underage-drinking"
                          target="_blank"
                          >Sources of Consequence Data for Underage Drinking</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/national-data-sources"
                          >National Data Sources</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/iowa-group-strengthens-data-collection"
                          >Iowa’s Data Task Group Strengthens Data Collection at
                          the Local Level</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/prevention-massachusetts"
                          >Prevention in Massachusetts: Following the Data Video
                          – 2012</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="step-2">
            <h3 class="cbp-nttrigger">
              <i class="flaticon-signal39"></i> Build Capacity
            </h3>
            <div class="cbp-ntcontent open-container">
              <h2>Play Narration</h2>
              <audio controls="controls">
                <source
                  src="http://resources.ga-sps.org/content/spf/spf-capacity-building.m4a"
                  type=""
                />
              </audio>
              <p>
                <b>Step 2</b> of the Strategic Prevention Framework (SPF)
                focuses on identifying resources and readiness for addressing
                substance misuse in communities.
              </p>
              <p>
                States and communities must have the capacity—that is, the
                resources and readiness—to support their chosen prevention
                programs and interventions. Programs that are well-supported are
                more likely to succeed. Community resources and community
                readiness often go hand-in-hand: building resource capacity also
                contributes to greater readiness. For example, when key
                stakeholders are involved in solving problems, they are more
                likely to engage others. This leads to more people recognizing
                the value of prevention and greater community readiness to
                accept prevention interventions.
              </p>
              <p>
                <a
                  href="http://www.samhsa.gov/capt/applying-strategic-prevention/cultural-competence"
                  target="_blank"
                  >Cultural competence</a
                >
                and the
                <a
                  href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/sustainability"
                  target="_blank"
                >
                  sustainability</a
                >
                of prevention outcomes are closely linked aspects of capacity
                building. Broad cultural representation is essential to
                sustaining long-term prevention efforts: the wider your base of
                support, the greater the likelihood you will achieve a
                successful outcome.
              </p>
              <ul class="cbp-ntsubaccordion">
                <li>
                  <h4 class="cbp-nttrigger">Raise Stakeholder Awareness</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Your goal is to persuade stakeholders, such as community
                      members or policymakers, to make your issue a priority. To
                      do that, you will need to make a strong and compelling
                      case for why they should devote their time, energy, and
                      resources to the problems you have identified. You’ll be
                      in a better position to gain their support by
                      <a
                        href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/cultural-competence/cultural-competence-spf"
                        target="_blank"
                      >
                        incorporating cultural competence into your
                        implementation of the Strategic Prevention Framework
                        (SPF).</a
                      >
                      Educate other members of the behavioral health
                      <a href="http://www.samhsa.gov/workforce" target="_blank"
                        >workforce</a
                      >
                      about how they can support prevention efforts in the work
                      you do, because not all practitioners may recognize the
                      role they can play.
                    </p>
                    <p>
                      Increasing community awareness isn’t about increasing the
                      knowledge and awareness of every community member. Rather,
                      it often involves collaborating with key stakeholders who
                      can influence whether your prevention initiative will
                      succeed. To identify these stakeholders, analyze the
                      readiness data you collected while
                      <a
                        href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step1-assess-needs"
                        target="_blank"
                        >assessing community needs.</a
                      >
                      Use the data to find community members and groups who are
                      not yet ready for the planned prevention approach, but who
                      will play a role in its success as stakeholders. Then
                      develop and implement strategies for boosting their
                      readiness levels.
                    </p>
                    <p>
                      <a
                        href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step1-assess-needs/assess-community-resources-readiness#community-readiness"
                        target="_blank"
                      >
                        Assess readiness</a
                      >
                      by determining how able and willing a community is to
                      accept that a problem exists and to take action to change
                      it. Your assessment should describe the degree to which
                      individuals, organizations, and/or communities are:
                    </p>
                    <ul>
                      <li>
                        Prepared to recognize prioritized problems as genuine
                        local concerns
                      </li>
                      <li>
                        Motivated to commit their resources to address those
                        problems
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h4 class="cbp-nttrigger">
                    Establish or Strengthen Collaboration Efforts
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Collaboration is an essential component of building
                      capacity successfully. Building a team from various groups
                      that have expertise in, or represent, the target
                      population will yield better outcomes through collective
                      information-sharing. Involving different sectors of the
                      community in early planning will also help ensure that
                      resources needed for sustainability will be available
                      later.
                    </p>
                    <p>
                      When thinking about collaboration, consider including a
                      variety of organizations or individuals. Champions for
                      prevention may be found in the local media, the
                      legislature, and in faith or business communities. Foster
                      relationships with those who support your prevention
                      efforts as well as with other stakeholders who may not be
                      ready to accept your program.
                    </p>
                  </div>
                </li>
                <li>
                  <h4 class="cbp-nttrigger">Expand Resources</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Resources exist in your organization and in the community
                      you serve. At the organizational level, you may decide to
                      strengthen data collection systems, re-allocate staff
                      workloads to improve efficiency, or increase coordination
                      with other state systems to build capacity for
                      implementing your prevention intervention.
                    </p>
                    <p>
                      At the community level, create planning groups that
                      reflect the ethnic make-up of the community. These groups
                      can help the prevention effort be more successful through
                      their resources and support.
                    </p>
                    <p>Resources include:</p>
                    <ul>
                      <li>Grants or donations</li>
                      <li>
                        Donated meeting space, food, photocopying services, or
                        computer hardware and software
                      </li>
                      <li>Program promotion or advertising outreach</li>
                      <li>
                        Consultants and/or volunteers who can supplement staff
                        expertise
                      </li>
                      <li>
                        Stakeholders, including those who are a part of the
                        population the intervention will focus on
                      </li>
                      <li>
                        Other collaborators who can provide additional
                        expertise, necessary services, or connections to your
                        target population
                      </li>
                      <li>
                        Local champions who will support your prevention efforts
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h4 class="cbp-nttrigger">
                    Prepare the Prevention Workforce
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      The success of any prevention effort depends on the
                      knowledge and skill of the people delivering the
                      intervention.
                      <a href="http://www.samhsa.gov/workforce" target="_blank"
                        >Workforce</a
                      >
                      development is more than simply preparing people to
                      complete specific tasks. Staff must have the right
                      credentials, training, experience, cultural competence,
                      and expertise to address all aspects of prevention.
                      Leaders and staff may need to be hired or may require
                      additional training and technical assistance.
                    </p>
                    <h5>Publications and Resources</h5>
                    <ul>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/capacity-building-sustainability"
                          target="_blank"
                          >Factors that Contribute to Capacity-Building and
                          Sustainability</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/21st-century-partners-prevention"
                          target="_blank"
                          >21st Century Partners in Prevention</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/partnerships-resources-substance-misuse-suicide"
                          target="_blank"
                          >Mobilizing Partnerships and Resources to Address
                          Substance Abuse and Suicide Webinar – 2014</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/building-capacity-through-collaboration"
                          target="_blank"
                          >Building Prevention Capacity through Collaboration
                          Video – 2012</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="step-3">
            <h3 class="cbp-nttrigger">
              <i class="flaticon-strategical"></i> Strategic Planning
            </h3>
            <div class="cbp-ntcontent open-container">
              <h2>Play Narration</h2>
              <audio controls="controls">
                <source
                  src="http://resources.ga-sps.org/content/spf/spf-strategic-planning.m4a"
                  type=""
                />
              </audio>
              <p>
                Step 3 of the Strategic Prevention Framework (SPF) shows how to
                plan effectively by prioritizing risk and protective factors and
                building logic models.
              </p>
              <p>
                <b
                  >Planning increases the effectiveness of prevention efforts by
                  ensuring that prevention professionals and their stakeholders
                  work toward the same goals. Three important parts of the
                  planning phase are:</b
                >
              </p>
              <ul>
                <li>
                  Prioritizing risk and protective factors identified in
                  <a
                    href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step1-assess-needs"
                    target="_blank"
                    >Step 1: Assess Needs</a
                  >
                  of the Strategic Prevention Framework (SPF)
                </li>
                <li>
                  <a
                    href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step3-plan/building-logic-models"
                    target="_blank"
                    >Building a logic model</a
                  >
                  for your program
                </li>
                <li>
                  <a
                    href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step3-plan"
                    target="_blank"
                  >
                    Selecting effective interventions</a
                  >
                </li>
              </ul>
              <br />
              <p>
                As you plan, keep in mind that decisions that reflect the input
                of all stakeholders, whether they are part of a formal coalition
                or informal group of collaborators, are more likely to keep
                stakeholders committed to your program.
              </p>
              <p>
                Planning is also crucial to the sustainability of prevention
                outcomes. It establishes the resources needed to maintain
                program activities and greatly increases the likelihood that you
                will achieve your expected outcomes.
              </p>
              <h4>Selecting Effective Interventions</h4>
              <p>
                Sometimes people want to select interventions that are popular,
                that worked well in a different community, or that they are
                familiar with. However, these are not good reasons for selecting
                an intervention. It is more important that the prevention
                intervention effectively address the priority substance use
                problem and associated risk and protective factors, and that
                intervention is a good fit for the broader community.
              </p>
              <p>
                <b
                  >There are three important criteria for selecting appropriate
                  prevention interventions:</b
                >
              </p>
              <ul>
                <li>The intervention is evidence-based</li>
                <li>Good conceptual fit for the community</li>
                <li>Good practical fit for the community</li>
              </ul>
              <br />
              <ul class="cbp-ntsubaccordion">
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Evidence-based Interventions</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Whenever possible, you should select evidence‐based
                      interventions. Evidence-based interventions have
                      documented evidence of effectiveness and are those that
                      research has shown to be effective. SAMHSA’s guidance
                      document
                      <a
                        href="http://store.samhsa.gov/product/Identifying-and-Selecting-Evidence-Based-Interventions-for-Substance-Abuse-Prevention/SMA09-4205"
                        target="_blank"
                        >Identifying and Selecting Evidence-Based Interventions
                        for Substance Abuse Prevention
                      </a>
                      defines evidence-based interventions as those that fall
                      into one or more of three categories:
                    </p>
                    <ul>
                      <li>
                        <b>Category 1.</b> The intervention is included in
                        federal registries of evidence-based interventions, such
                        as the
                        <a href="http://www.samhsa.gov/nrepp" target="_blank">
                          National Registry of Evidence-based Programs and
                          Practices (NREPP);</a
                        >
                        <b>OR</b>
                      </li>
                      <li>
                        <b>Category 2.</b> The intervention is reported with
                        positive effects on the primary targeted outcome in
                        peer-reviewed journals;
                        <b>OR</b>
                      </li>
                      <li>
                        <b>Category 3.</b> The intervention has documented
                        evidence of effectiveness, based on guidelines developed
                        by
                        <a
                          href="http://www.samhsa.gov/about-us/who-we-are/offices-centers/csap"
                          target="_blank"
                        >
                          CSAP</a
                        >
                        and/or the state, tribe, or jurisdiction in which the
                        intervention took place.
                      </li>
                    </ul>
                    <br />
                    <p>
                      <b
                        >Documented evidence should be implemented under four
                        recommended guidelines, all of which must be followed.
                        These guidelines require interventions to be:</b
                      >
                    </p>
                    <ol>
                      <li>
                        Based on a theory of change that is documented in a
                        clear logic or conceptual mode. The Department of Health
                        and Human Services (HHS) recommends prevention
                        professionals
                        <a
                          href="http://www.hhs.gov/ash/initiatives/quality/quality/"
                          target="_blank"
                        >
                          develop a basic driver of quality diagram</a
                        >
                        to help their programs achieve desired outcomes.
                        <b>AND</b>
                      </li>
                      <li>
                        Similar in content and structure to interventions that
                        appear in federal registries of evidence-based
                        interventions and/or peer-reviewed journals.
                        <b>AND</b>
                      </li>
                      <li>
                        Supported by documentation showing it has been
                        effectively implemented in the past, multiple times, and
                        in a manner attentive to scientific standards of
                        evidence. The intervention results should show a
                        consistent pattern of credible and positive effects.
                        <b>AND</b>
                      </li>
                      <li>
                        Reviewed and deemed appropriate by a panel of informed
                        prevention experts that includes qualified prevention
                        researchers experienced in evaluating prevention
                        interventions similar to those under review; local
                        prevention professionals; and key community leaders, as
                        appropriate (for example, law enforcement officials,
                        educators, or elders within indigenous cultures).
                      </li>
                    </ol>
                    <br />
                    <p>
                      It’s important to note, however, that these sources are
                      not exhaustive, and they may not include interventions
                      appropriate for all problems or all populations. In these
                      cases, you must look to other credible sources of
                      information. Since states have different guidelines for
                      what constitutes credible evidence of effectiveness, you
                      could start by talking to prevention experts—including
                      your state-level evidence‐based workgroup.
                    </p>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Determining Fit</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      In addition to selecting an intervention that is
                      evidence-based, you need to ensure that the intervention,
                      or combination of interventions, that you select are a
                      good fit for the community.
                    </p>
                    <p><b>There are two types of fit to consider:</b></p>
                    <ul>
                      <li>
                        <b>Conceptual fit:</b> An intervention has good
                        conceptual fit if it directly addresses one or more of
                        the priority factors driving a specific substance use
                        problem and has been shown to produce positive outcomes
                        for members of the target population. To determine the
                        conceptual fit, ask, “Will this intervention have an
                        impact on at least one of our community’s priority risk
                        and protective factors?”
                      </li>
                      <li>
                        <b>Practical fit:</b> An intervention has good practical
                        fit if it is culturally relevant for the target
                        population, the community has capacity to support it,
                        and if it enhances or reinforces existing prevention
                        activities. To determine the practical fit of an
                        intervention, ask, “Is this intervention appropriate for
                        our community?”
                      </li>
                    </ul>
                    <br />
                    <p>
                      Evidence‐based interventions with both conceptual fit and
                      practical fit will have the highest likelihood ofproducing
                      positive prevention outcomes.
                    </p>
                    <p><b>Publications and Resources</b></p>
                    <ul>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/finding-evidence-based-programs"
                          target="_blank"
                          >Finding Evidence-based Programs and Practices</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/strategies-interventions-prevent-youth-marijuana-use"
                          target="_blank"
                          >Strategies and Interventions to Prevent Youth
                          Marijuana Use</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/south-carolina-workgroup-supports-local-efforts-curb-underage-drinking"
                          target="_blank"
                          >South Carolina Workgroup Supports Local Efforts to
                          Curb Underage Drinking</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="step-4">
            <h3 class="cbp-nttrigger">
              <i class="flaticon-gear42"></i> Implement
            </h3>
            <div class="cbp-ntcontent open-container">
              <h2>Play Narration</h2>
              <audio controls="controls">
                <source
                  src="http://resources.ga-sps.org/content/spf/spf-implementation.m4a"
                  type=""
                />
              </audio>
              <p>
                In Step 4 of the Strategic Prevention Framework (SPF),
                prevention professionals develop action plans to implement their
                chosen prevention intervention.
              </p>
              <p>
                In Step 4 of the SPF, prevention planners implement their
                program. During this step, you will see if your assessments were
                accurate and also find out how your target population responds
                to the program. As you implement your selected interventions,
                develop a strong action plan and adapt it as needed. Stay aware
                of factors that may influence how your intervention is
                implemented.
              </p>
              <ul class="cbp-ntsubaccordion">
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Develop an Action Plan</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      An action plan is a written document that lays out exactly
                      how you will implement your selected evidence-based
                      intervention, which may be a program, policy, or strategy.
                      The action plan describes:
                    </p>
                    <ul>
                      <li>What you expect to accomplish</li>
                      <li>Specific steps you will take to reach goals</li>
                      <li>Who will be responsible for doing what</li>
                    </ul>
                    <p>
                      If you are implementing more than one intervention, it is
                      helpful to develop a separate action plan for each.
                    </p>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">
                    Factors That May Influence Implementation
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Many things can influence how a program is implemented,
                      including staff selection, staff training, staff and
                      program evaluation, available resources, and past
                      experience implementing prevention programs.
                    </p>
                    <ul>
                      <li>
                        <b>Staff selection:</b> In addition to academic and
                        professional qualifications, other characteristics may
                        also be desirable, such as bilingualism, lived
                        experience, or familiarity with local conditions. These
                        characteristics must be identified and be a part of your
                        selection criteria.
                      </li>
                      <li>
                        <b>Pre- and in-service training:</b> Trainings are
                        efficient ways to communicate background information,
                        theory, program rationale, and expected outcomes. They
                        also provide opportunities for program staff to practice
                        new skills and receive feedback.
                      </li>
                      <li>
                        <b>Ongoing consultation or coaching:</b> Implementing
                        evidence-based practices and interventions may require
                        behavior change among program staff. Training and
                        coaching can help bring about these changes.
                      </li>
                      <li>
                        <b>Staff and program evaluation:</b> Assessing
                        performance and measuring program fidelity can provide
                        useful feedback on how the staff and program are
                        performing during implementation.
                      </li>
                      <li>
                        <b>Program support:</b> Providing clear leadership and
                        making use of relevant data to inform decision-making
                        helps to keep staff organized and focused on desired
                        outcomes.
                      </li>
                      <li>
                        <b
                          >History implementing prevention interventions in the
                          past:</b
                        >
                        What’s your track record? Do you have past successes
                        that you can point to and build on?
                      </li>
                      <li>
                        Key stakeholder support: For a program to be effective,
                        community members must be involved in its
                        implementation. In the short term, these stakeholders
                        help to ensure that the prevention approach is
                        well-matched to the target population. In the long term,
                        stakeholders can become program champions by
                        <a
                          href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/sustainability"
                          target="_blank"
                          >sustaining program activities</a
                        >
                        and prevention priorities.
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Fidelity and Adaptation</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      When a prevention program is implemented as its developer
                      intended, there is greater likelihood that its impact will
                      be similar to the settings where it was first implemented
                      or tested. Maintaining fidelity means keeping most
                      elements of the program the same. However, programs may
                      need to be adapted to gain greater community acceptance or
                      in response to the contexts of a particular setting.
                      Budget constraints, staff availability, time limitations,
                      or other issues may make adaptation necessary.
                    </p>
                    <p>
                      In these situations, finding the right approach to stay
                      faithful to the original evidence-based design and address
                      the target audience’s unique characteristics requires
                      balancing fidelity and adaptation. When you change an
                      intervention, you may be compromising outcomes. Even so,
                      implementing a program that requires some adaptation may
                      be more efficient and cost-effective than designing a
                      program from scratch.
                    </p>
                    <h3>General Guidelines for Program Adaptation</h3>
                    <ul>
                      <li>
                        <b
                          >Select programs with the best initial fit to local
                          needs and conditions:</b
                        >
                        This will reduce the likelihood that you will need to
                        make adaptations later on.
                      </li>
                      <li>
                        <b>Select programs with the largest effect size:</b>
                        Effect size refers to the magnitude of the effects of an
                        intervention. The smaller an intervention’s effect size,
                        the more careful you want to be about changing anything.
                        You don’t want to inadvertently compromise any good
                        you’re doing. In general, adaptations to programs with
                        large effect sizes are less likely to affect expected
                        outcomes.
                      </li>
                      <li>
                        <b>Change capacity before changing the program:</b> It
                        may be easier to change the program, but changing local
                        capacity to deliver it as it was designed is a better
                        choice.
                      </li>
                      <li>
                        <b>Consult experts:</b> Experts can include the program
                        developer, an environmental strategies specialist, or
                        your evaluator. They may be able to tell you how the
                        intervention has been adapted in the past and how well
                        (or not) those adaptations worked.
                      </li>
                      <li>
                        <b>Retain core components:</b> When a program retains
                        core components of the original intervention, it’s more
                        likely to be effective. If you’re not sure which
                        elements are core, consult the program developer, an
                        environmental strategies specialist, or an evaluator.
                      </li>
                      <li>
                        <b>Be consistent with evidence-based principles:</b>
                        Programs and practices that adhere to evidence-based
                        principles are more likely to be effective. Adaptations
                        should be consistent with the science.
                      </li>
                      <li>
                        <b>Add rather than subtract:</b> Doing so will decrease
                        the likelihood that you are eliminating a program
                        element that is important.
                      </li>
                      <li>
                        <b>Effective cultural adaptation:</b> Cultural
                        adaptation refers to program modifications that are
                        tailored to the values, attitudes, beliefs, and
                        experiences of the target audience. This type of
                        adaptation relies on strong relationships with cultural
                        leaders and access to culturally competent program
                        staff.
                        <a
                          href="http://www.samhsa.gov/capt/applying-strategic-prevention/cultural-competence"
                          target="_blank"
                          >Learn more about cultural competence.</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Publications and Resources</h4>
                  <div class="cbp-ntcontent">
                    <ul>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/core-components-why-they-matter"
                          target="_blank"
                          >What Are Core Components, and Why Do They Matter?</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/webinars-help-practitioners-implement-environmental-strategies"
                          target="_blank"
                          >CAPT Webinars Help Practitioners Implement
                          Environmental Prevention Strategies</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="step-5">
            <h3 class="cbp-nttrigger">
              <span class="flaticon-workers"></span> Evaluation
            </h3>
            <div class="cbp-ntcontent open-container">
              <h2>Play Narration</h2>
              <audio controls="controls">
                <source
                  src="http://resources.ga-sps.org/content/spf/spf-evaluation.m4a"
                  type=""
                />
              </audio>
              <p>
                The evaluation step of SAMHSA’s Strategic Prevention Framework
                (SPF) quantifies the challenges and successes of implementing a
                prevention program.
              </p>
              <p>
                Evaluation is the systematic collection and analysis of
                information about program activities, characteristics, and
                outcomes. The evaluation step of the Strategic Prevention
                Framework (SPF) is not just about collecting information, but
                using that information to improve the effectiveness of a
                prevention program. After evaluation, planners may decide
                whether or not to continue the program.
              </p>
              <p>
                Prevention practitioners need to evaluate how well the program
                was delivered and how successful it was in achieving the
                expected outcomes. Once the program has been evaluated,
                prevention planners typically report evaluation results to
                stakeholders, which can include community members and lawmakers.
                Stakeholders can promote your program, increase public interest,
                and possibly help to secure additional funding.
              </p>
              <p>Learn more about:</p>
              <ul>
                <li>
                  <a
                    href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step5-evaluation/process-outcomes-evaluation"
                    target="_blank"
                    >Evaluating process and outcomes</a
                  >
                </li>
                <li>
                  <a
                    href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/step5-evaluation/communicating-evaluation-results"
                    target="_blank"
                    >Communicating evaluation results</a
                  >
                </li>
              </ul>
              <ul class="cbp-ntsubaccordion">
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Evaluation and the SPF</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Prevention practitioners engage in a variety of
                      evaluation-related activities, including identifying
                      evaluation expertise, designing evaluation plans, and
                      finding and analyzing epidemiological data. Evaluation is
                      more than a final step. It should be a part of every
                      aspect of the SPF, from assessing needs to communicating
                      results.
                    </p>
                    <p>
                      During an evaluation, prevention practitioners ask the
                      following questions:
                    </p>
                    <ul>
                      <li>
                        How successful was the community in selecting and
                        implementing appropriate strategies?
                      </li>
                      <li>
                        Were these the “right” strategies, given the
                        <a
                          href="http://www.samhsa.gov/capt/practicing-effective-prevention/prevention-behavioral-health/risk-protective-factors"
                          target="_blank"
                          >risk and protective factors</a
                        >
                        the community identified?
                      </li>
                      <li>
                        Were representatives from across the community involved
                        in program planning, selection, and implementation? In
                        what ways were they involved?
                      </li>
                      <li>
                        Was the planning group able to identify potential new
                        partners with which to collaborate?
                      </li>
                      <li>
                        What was the quality of the data used in decision
                        making?
                      </li>
                    </ul>
                    <p>
                      Engaging stakeholders who represent the populations you
                      hope to reach greatly increases the chance that your
                      evaluation efforts will be successful. Stakeholders can
                      dictate how (or even whether) evaluation results are
                      shared. Stakeholder involvement also helps to ensure that
                      the evaluation design, including methods and the
                      instruments used, is consistent with the cultural norms of
                      the people you serve. Learn more about
                      <a
                        href="http://www.samhsa.gov/capt/applying-strategic-prevention/cultural-competence"
                        target="_blank"
                        >cultural competence</a
                      >
                      in prevention practice.
                    </p>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Publications and Resources</h4>
                  <div class="cbp-ntcontent">
                    <ul>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/evaluation-tools-resources"
                          target="_blank"
                          >Evaluation Tools and Resources</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/minimizing-evaluation-costs"
                          target="_blank"
                          >Minimizing Evaluation Costs</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/building-capacity-programs-serving-aian"
                          target="_blank"
                          >Building the Evaluation Capacity of Local Programs
                          Serving American Indian/Alaska Native Populations:
                          Lessons Learned</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/effective-focus-groups"
                          target="_blank"
                          >Strategies for Conducting Effective Focus Groups</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/conducting-key-informant-interviews"
                          target="_blank"
                          >Tips for Conducting Key Informant Interviews</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Cultural Competence</h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Cultural competence, the ability to interact effectively
                      with people of different cultures, helps to ensure the
                      needs of all community members are addressed.
                    </p>
                    <p>
                      Cultural competence is the ability to interact effectively
                      with people of different cultures. In practice, both
                      individuals and organizations can be culturally competent.
                      Culture must be considered at every step of the Strategic
                      Prevention Framework (SPF). “Culture” is a term that goes
                      beyond just race or ethnicity. It can also refer to such
                      characteristics as age, gender, sexual orientation,
                      disability, religion, income level, education,
                      geographical location, or profession.
                    </p>
                    <p>
                      Cultural competence means to
                      <a
                        href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/cultural-competence/cultural-competence-spf#be-respectful-and-responsive"
                        target="_blank"
                        >be respectful and responsive</a
                      >
                      to the health beliefs and practices—and cultural and
                      linguistic needs—of diverse population groups. Developing
                      cultural competence is also an evolving, dynamic process
                      that takes time and
                      <a
                        href="http://www.samhsa.gov/capt/applying-strategic-prevention-framework/cultural-competence/cultural-competence-spf#cultural-competence-continuum"
                        target="_blank"
                        >occurs along a continuum.</a
                      >
                    </p>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">
                    Building a Culturally Competent Workforce
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      To produce positive change, prevention practitioners and
                      other members of the behavioral health
                      <a href="http://www.samhsa.gov/workforce" target="_blank"
                        >workforce</a
                      >
                      must understand the cultural context of their target
                      community. They must also have the willingness and skills
                      to work within this context. This means drawing on
                      community-based values and customs and working with
                      knowledgeable people from the community in all prevention
                      efforts.
                    </p>
                    <p>
                      Practicing cultural competence throughout the program
                      planning process ensures that all members of a community
                      are represented and included. It can also prevent wasteful
                      spending on programs and services that a community can’t
                      or won’t use. This is why understanding the needs,
                      <a
                        href="http://www.samhsa.gov/capt/practicing-effective-prevention/prevention-behavioral-health/risk-protective-factors"
                        target="_blank"
                        >risk and protective factors,</a
                      >
                      and potential obstacles of a community or specific
                      population is crucial.
                    </p>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">
                    Culturally Competent Organizations
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      Cultural competence applies to organizations and health
                      systems, just as it does to professionals. A culturally
                      competent organization:
                    </p>
                    <ul>
                      <li>
                        <b>Continually assesses organizational diversity:</b>
                        Organizations should conduct a regular assessment of its
                        members’ experiences working with diverse communities
                        and focus populations. It also regularly assesses the
                        range of values, beliefs, knowledge, and experiences
                        within the organization that would allow for working
                        with focus communities.
                      </li>
                      <li>
                        <b
                          >Invests in building capacity for cultural competency
                          and inclusion:</b
                        >
                        Organizations should have policies, procedures, and
                        resources in place that make ongoing development of
                        cultural competence and inclusion possible. It must also
                        be willing to commit the resources necessary to build or
                        strengthen relationships with groups and communities.
                        Including representatives of the focus population within
                        the organization’s ranks is especially useful.
                      </li>
                      <li>
                        <b
                          >Practices strategic planning that incorporates
                          community culture and diversity:</b
                        >
                        Organizations are urged to collaborate with other
                        community groups. Its members are also encouraged to
                        develop supportive relationships with other community
                        groups. When these steps are taken, the organization is
                        seen as a partner by other groups and their members.
                      </li>
                      <li>
                        <b
                          >Implements prevention strategies using culture and
                          diversity as a resource:</b
                        >
                        Community members and organizations must have an
                        opportunity to create and/or review audiovisual
                        materials, public service announcements, training
                        guides, printed resources, and other materials to ensure
                        they are accessible to, and attuned to their community
                        or focus population.
                      </li>
                      <li>
                        <b
                          >Evaluates the incorporation of cultural
                          competence:</b
                        >
                        Community members must have a forum to provide both
                        formal and informal feedback on the impact of all
                        prevention interventions.
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">
                    CSAP Principles of Cultural Competence
                  </h4>
                  <div class="cbp-ntcontent">
                    <p>
                      <a
                        href="http://www.samhsa.gov/about-us/who-we-are/offices-centers/csap"
                        target="_blank"
                        >SAMHSA’s Center for Substance Abuse Prevention
                        (CSAP)</a
                      >
                      has identified the following principles of cultural
                      competence:
                    </p>
                    <ul>
                      <li>Ensure community involvement in all areas</li>
                      <li>
                        Use a population-based definition of community (let the
                        community define itself)
                      </li>
                      <li>
                        Stress the importance of relevant,
                        culturally-appropriate prevention approaches
                      </li>
                      <li>Employ culturally-competent evaluators</li>
                      <li>
                        Promote cultural competence among program staff that
                        reflect the community they serve
                      </li>
                      <li>
                        Include the target population in all aspects of
                        prevention planning
                      </li>
                    </ul>
                    <p>
                      Learn more about the Department of Health and Human
                      Services (HHS) Office of Minority Health’s
                      <a
                        href="https://www.thinkculturalhealth.hhs.gov/Content/clas.asp"
                        target="_blank"
                        >National Standards for Culturally and Linguistically
                        Appropriate Services in Health and Health Care: A
                        Blueprint for Advancing and Sustaining CLAS Policy and
                        Practice.</a
                      >
                    </p>
                  </div>
                </li>
                <li class="cbp-ntopen">
                  <h4 class="cbp-nttrigger">Publications and Resources</h4>
                  <div class="cbp-ntcontent">
                    <ul>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/resources-related-cultural-competence"
                          target="_blank"
                        >
                          Resources Related to Cultural Competence
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/elements-culturally-competent-prevention-system"
                          target="_blank"
                        >
                          Elements of a Culturally Competent Prevention System
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/red-lake-nation-highlights-culture-prevention"
                          target="_blank"
                        >
                          Red Lake Nation Highlights Culture as Prevention
                        </a>
                      </li>

                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/protective-factors-factsheet"
                          target="_blank"
                        >
                          Protective Factors Factsheet
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.samhsa.gov/capt/tools-learning-resources/michigan-weaves-cultural-competency-its-substance-misuse-services"
                          target="_blank"
                        >
                          Michigan Weaves Cultural Competency into its Substance
                          Abuse Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  </PageWrapper>
</template>
