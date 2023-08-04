<script setup>
// TODO exhibition
import { fit_input } from '@ui'
import { use_props, use_config_data, use_template_data } from '@composables'
import { computed, reactive, ref, watch } from 'vue'
import moment from 'moment'

const props = defineProps(
  use_props({
    unic_id: null,
  })
)

const ready = ref(false)

const doctors = ref([])
const branches = ref([])
const doctor_times = ref([])
const active_branch = ref(null)
const active_doctor_id = ref(null)
const active_record_time = ref(null)

const select_time = (record_time) => {
  active_record_time.value = record_time
}

const on_select = (doctor) => {
  active_doctor_id.value = doctor.id
}

const reception_date = ref(null)
import { use_config_store } from '@store'
const config = use_config_store()
const fetch_date = () => {
  fetch(`${config.api}/api/global/doctor_time?date=${reception_date.value}`)
    .then((res) => res.json())
    .then((d) => {
      doctors.value = d.doctors
      branches.value = d.branches
      doctor_times.value = d.doctor_times
      active_branch.value = branches.value[0].id

      ready.value = true
    })
}
watch(reception_date, () => {
  fetch_date()
})
reception_date.value = moment(Date.now()).format('YYYY-MM-DD')
const on_input = (v) => {
  reception_date.value = v
}

//
// store data
//

const data =
  use_config_data(props.unic_id) || use_template_data('doctor_times', null)
data.value = computed({
  get() {
    return JSON.stringify({
      reception_doctor_id: active_doctor_id.value,
      reception_date: reception_date.value,
      reception_time: active_record_time.value,
      branch_id: active_branch.value,
    })
  },
  set(v) {
    if (!v) {
      active_doctor_id.value = null
      reception_date.value = moment(Date.now()).format('YYYY-MM-DD')
      active_record_time.value = null
      active_branch.value = branches.value[0].id
    }
  },
})

const change_active_branch = (branch_id) => {
  active_branch.value = branch_id
}

const divide_doctor_times = computed(() => {
  const res = doctor_times.value.reduce((divide_times, time) => {
    get_divide_doctor_time(time).forEach((divide_time) => {
      if (
        !divide_times.filter((t) => t.record_time === divide_time.record_time)
          .length
      ) {
        divide_times.push(divide_time)
      }
    })

    return divide_times.sort((a, b) => {
      return a.record_time > b.record_time
    })
  }, [])

  return active_doctor_id.value
    ? res.filter((d) => d.doctor_id === active_doctor_id.value)
    : res
})
const not_extra_time = (start, end) => {
  return moment(start).valueOf() < moment(end).valueOf()
}

const get_divide_doctor_time = (time) => {
  const divide_time = []
  let time_begin = time.time_begin

  while (
    not_extra_time(
      time.date + ' ' + time_begin,
      time.date + ' ' + time.time_end
    )
  ) {
    divide_time.push({
      record_time: moment(time.date + ' ' + time_begin).format('HH:mm'),
      ...time,
    })
    time_begin = moment(time.date + ' ' + time_begin)
      .add(30, 'm')
      .format('HH:mm:ss')
  }

  return divide_time
}

const doctor_times_for_branch = computed(() => {
  return (branch_id) => {
    return divide_doctor_times.value.filter(
      (doctor_time) => doctor_time.branch_id === branch_id
    )
  }
})

const doctor_names_for_branch = computed(() => {
  return (branch_id) => {
    const doctors1 = new Set()
    doctor_times.value.forEach((doctor_time) => {
      if (doctor_time.branch_id === branch_id)
        doctors1.add(doctor_time.doctor_id)
    })
    const doctors_2 = [...doctors1]

    return doctors.value.filter((doctor) => doctors_2.includes(doctor.id))
  }
})

const get_src = computed(() => {
  return doctors.value.find((doctor) => doctor.id === active_doctor_id.value)
    ?.avatar
})

const get_letter = computed(() => {
  return doctors.value.find((doctor) => doctor.id === active_doctor_id.value)
    ?.last_name[0]
})
</script>

<template>
  <template v-if="ready">
    <div class="doctor_times">
      <!-- reception_date -->
      <fit_input
        :value="reception_date"
        type="date"
        placeholder="Дата приёма"
        @input="on_input"
      />
      <!-- /reception_date -->

      <!-- branches -->
      <div class="branches">
        <div
          v-for="branch in branches"
          :key="branch.id"
          class="branches__elem"
          :class="{ '--active': branch.id === active_branch }"
          @click="change_active_branch(branch.id)"
        >
          {{ branch.name }}
        </div>
      </div>
      <!-- /branches -->

      <template v-if="doctor_names_for_branch(active_branch).length">
        <!-- doctor_times_for_branch -->
        <div class="doctor_times_for_branch">
          <div
            v-for="time in doctor_times_for_branch(active_branch)"
            :key="time"
            class="doctor_times_for_branch__elem"
            :class="{ '--active': time.record_time === active_record_time }"
            @click="select_time(time.record_time)"
          >
            {{ time.record_time }}
          </div>
        </div>
        <!-- /doctor_times_for_branch -->

        <!-- doctor_names_for_branch -->
        <div class="doctor_names_for_branch">
          <select class="doctor_names_for_branch__select">
            <option
              value=""
              selected
              @click="on_select({ id: 0 })"
            >
              Выберите врача
            </option>
            <option
              value=""
              v-for="doctor in doctor_names_for_branch(active_branch)"
              :key="doctor.id"
              @click="on_select(doctor)"
            >
              {{
                doctor.last_name +
                ' ' +
                doctor.first_name +
                ' ' +
                doctor.second_name
              }}
            </option>
          </select>

          <div class="doctor_avatar">
            <template v-if="get_src">
              <img
                class="doctor_avatar__img"
                :src="get_src"
              />
            </template>

            <template v-else>
              <span class="doctor_avatar__letter">
                <span>
                  {{ get_letter ? get_letter : 'H' }}
                </span>
              </span>
            </template>
          </div>
        </div>
      </template>

      <template v-else>
        <div>В данный день нет свободных записей</div>
      </template>
      <!-- /doctor_names_for_branch -->
    </div>
  </template>
</template>

<style lang="sass" scoped>
@use '@styles/utils'
@use '@styles/vars'
@use '@styles/classes/content'

$avatar_size: 60px

// doctor_times

.doctor_times
	@include utils.f('col,as,gl')

	& > *
		width: 100%

// branches

.branches
	@include utils.f('js')

	&__elem
		@include content.title
		cursor: pointer
		&.--active
			color: vars.$dc

// doctor_times_for_branch

.doctor_times_for_branch
	@include utils.f('js')

	&__elem
		margin-right: 4px
		margin-bottom: 4px
		border-radius: 6px
		padding: 6px 8px
		cursor: pointer
		color: white
		font-size: 20px
		background-color: vars.$dc
		&.--active
			background-color: vars.$ac

// doctor_names_for_branch

.doctor_names_for_branch
	@include utils.f()

	&__select
		@include content.active_element
		color: vars.$fc !important
		border: 1px solid vars.$dc !important
		background-color: vars.$dco !important
		font-size: 22px !important
		width: calc(100% - $avatar_size - 2 * vars.$base_distance)
		option
			font-size: 22px !important

// doctor_avatar
.doctor_avatar
	@include utils.f()
	height: $avatar_size + vars.$base_distance

	& > *
		height: 100%

	&__letter
		width: $avatar_size
		height: $avatar_size
		border-radius: 50%
		color: white
		background-color: vars.$ac !important
		display: flex
		justify-content: center
		align-items: center
		span
			@include content.title
</style>
