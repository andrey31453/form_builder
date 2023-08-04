<template>
  <div
    class="_fcol_ _gap_l"
    style="padding-top: 12px; margin-bottom: 24px"
    :key="component_key"
  >
    <!-- Взрослая челюсть -->
    <div
      v-show="!ten_tooth"
      class="_fcol_ teeth-container mt-2 mb-2"
    >
      <div
        v-for="(jaw, jaw_index) in teeth"
        :key="jaw_index"
        class="d-flex col justify-content-center"
        :class="{
          'mb-3': jaw_index == 0,
          'bottom-teeth': jaw_index == 1,
        }"
      >
        <div
          v-for="i in jaw"
          :key="i.tooth"
          class="tooth position-relative"
          :style="i.style"
          :class="{
            active_tooth: data.value.indexOf(String(i.tooth)) !== -1,
            chosen_tooth: chosen_tooth.indexOf(String(i.tooth)) !== -1,
            active_tooth_jaw:
              data.value.indexOf(jaw_index == 0 ? '1' : '2') !== -1,
            implant: implant.indexOf(String(i.tooth)) !== -1,
            caries: caries.indexOf(String(i.tooth)) !== -1,
            koren: koren.indexOf(String(i.tooth)) !== -1,
            pulpit: pulpit.indexOf(String(i.tooth)) !== -1,
          }"
          @click="handleStateClick"
        >
          <span
            class="point position-absolute"
            :class="{ bottom: jaw_index == 1 }"
          >
            {{ i.tooth }}
          </span>
          <img
            :id="`tooth_${i.tooth}`"
            :class="i.class"
            :ref="`tooth_${i.tooth}`"
            :src="`${domen}/images/teeths/${i.src}`"
          />
        </div>
      </div>
    </div>

    <!-- Детская челюсть -->
    <div
      v-show="ten_tooth"
      class="teeth-container _fcol_ mt-2 mb-2 rows justify-content-center"
    >
      <div
        v-for="(jaw, jaw_index) in teeth_ten"
        :key="jaw_index"
        class="d-flex col justify-content-center"
        :class="{
          'mb-3': jaw_index == 0,
          'bottom-teeth': jaw_index == 1,
        }"
      >
        <div
          v-for="i in jaw"
          :key="i.tooth"
          class="tooth position-relative"
          :style="i.style"
          :class="{
            active_tooth: data.value.indexOf(String(i.tooth)) !== -1,
            chosen_tooth: chosen_tooth.indexOf(String(i.tooth)) !== -1,
            active_tooth_jaw:
              data.value.indexOf(jaw_index == 0 ? '1' : '2') !== -1,
            implant: implant.indexOf(String(i.tooth)) !== -1,
            caries: caries.indexOf(String(i.tooth)) !== -1,
            koren: koren.indexOf(String(i.tooth)) !== -1,
            pulpit: pulpit.indexOf(String(i.tooth)) !== -1,
          }"
          @click="handleStateClick"
        >
          <span
            class="point position-absolute"
            :class="{ bottom: jaw_index == 1 }"
          >
            {{ i.tooth }}
          </span>
          <img
            :id="`tooth_${i.tooth}`"
            :class="i.class"
            :ref="`tooth_${i.tooth}`"
            :src="`${domen}/images/teeths/${i.src}`"
          />
        </div>
      </div>
    </div>

    <!-- Button-FIX -->
    <div class="rows justify-content-center">
      <div class="col">
        <div class="d-flex justify-content-center my-1">
          <fit_button
            class="tooth-btn"
            variant="outline"
            text="Верхние"
            @on="ChooseUp"
          />
          <fit_button
            class="tooth-btn"
            variant="outline"
            text="Нижние"
            @on="ChooseDown"
          />
        </div>
      </div>
      <div class="col">
        <div class="d-flex justify-content-center my-1">
          <fit_button
            class="tooth-btn"
            variant="outline"
            text="Все зубы"
            @on="ChooseAll"
          />
          <fit_button
            class="tooth-btn"
            variant="outline"
            text="Отменить"
            @on="ClearAll"
          />
        </div>
      </div>
    </div>

    <div class="rows justify-content-center">
      <fit_button
        class="tooth-btn"
        variant="outline"
        @on="ten_tooth = !ten_tooth"
      >
        {{ ten_tooth ? 'Взрослые' : 'Детские' }}
      </fit_button>
    </div>
    <!-- END Button-FIX -->
  </div>
</template>

<script>
import { fit_button } from '@ui'
import { use_config_data, use_template_data } from '@composables'
import { use_config_store } from '@store'
import { teeth, teeth_ten } from './assets'

export default {
  components: { fit_button },

  props: {
    hoverbackground: {
      type: Boolean,
      default: true,
    },
    root: {
      type: Boolean,
      default: true,
    },
    implantation: {
      type: Boolean,
      default: true,
    },
    rootcanal: {
      type: Boolean,
      default: true,
    },
    prosthetics: {
      type: Boolean,
      default: true,
    },
    whitening: {
      type: Boolean,
      default: true,
    },
    gum: {
      type: Boolean,
      default: true,
    },
    surgery: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: Boolean,
      default: true,
    },
    emit_after_check: {
      type: Boolean,
      default: false,
    },
    chosen_tooth: {
      type: Array,
      default() {
        return []
      },
    },
    one_active_tooth: {
      type: Boolean,
      default: false,
    },
    diagnose_chosen_tooth: {
      type: Boolean,
      default: false,
    },
    diagnoses_chosen_tooth: {
      type: Array,
      default() {
        return []
      },
    },
    checked_tooth: {
      type: Boolean,
      default: false,
    },
    unic_id: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const data =
      use_config_data(props.unic_id) || use_template_data('teeths', [])

    data.value = []

    const config = use_config_store()
    const { domen } = config
    return { data, domen }
  },

  data() {
    return {
      component_key: 0,
      teeth: teeth,
      teeth_ten: teeth_ten,
      diagnoses: [],
      ten_tooth: false,
      implant: [],
      caries: [],
      koren: [],
      pulpit: [],
    }
  },

  methods: {
    do_reactive() {
      this.component_key++
    },
    handleStateClick(elem) {
      const targetTooth = elem.currentTarget.querySelector('[id^="tooth_"]')
      if (targetTooth) {
        const index = targetTooth.id.replace('tooth_', '')
        const active = this.data.value.indexOf(index)
        if (active === -1 && this.one_active_tooth) {
          this.data.value.splice(0, this.data.value.length)
          this.data.value.push(index)
        } else if (active === -1) {
          this.data.value.push(index)
        } else {
          this.data.value.splice(active, 1)
        }
        if (this.diagnose_chosen_tooth) {
          this.diagnoses_chosen_tooth.splice(
            0,
            this.diagnoses_chosen_tooth.length
          )
          Array.prototype.push.apply(
            this.diagnoses_chosen_tooth,
            this.diagnoses.filter((guide) =>
              this.data.value.includes(guide.tooth)
            )
          )
        }
        if (this.emit_after_check) {
          this.$emit('emit_after')
        }
      }

      this.do_reactive()
    },

    ChooseAll() {
      if (this.ten_tooth) {
        this.data.value.splice(0, this.data.value.length)
        this.data.value.push(
          '55',
          '54',
          '53',
          '52',
          '51',
          '61',
          '62',
          '63',
          '64',
          '65',
          '85',
          '84',
          '83',
          '82',
          '81',
          '71',
          '72',
          '73',
          '74',
          '75'
        )
      } else {
        this.data.value.splice(0, this.data.value.length)
        this.data.value.push(
          '18',
          '17',
          '16',
          '15',
          '14',
          '13',
          '12',
          '11',
          '28',
          '27',
          '26',
          '25',
          '24',
          '23',
          '22',
          '21',
          '38',
          '37',
          '36',
          '35',
          '34',
          '33',
          '32',
          '31',
          '48',
          '47',
          '46',
          '45',
          '44',
          '43',
          '42',
          '41'
        )
      }
      this.do_reactive()
    },

    ChooseUp() {
      this.data.value.splice(0, this.data.value.length)

      if (this.ten_tooth) {
        this.data.value.push(
          '55',
          '54',
          '53',
          '52',
          '51',
          '61',
          '62',
          '63',
          '64',
          '65'
        )
      } else {
        this.data.value.push(
          '18',
          '17',
          '16',
          '15',
          '14',
          '13',
          '12',
          '11',
          '28',
          '27',
          '26',
          '25',
          '24',
          '23',
          '22',
          '21'
        )
      }

      this.do_reactive()
    },

    ChooseDown() {
      this.data.value.splice(0, this.data.value.length)

      if (this.ten_tooth) {
        this.data.value.push(
          '85',
          '84',
          '83',
          '82',
          '81',
          '71',
          '72',
          '73',
          '74',
          '75'
        )
      } else {
        this.data.value.push(
          '38',
          '37',
          '36',
          '35',
          '34',
          '33',
          '32',
          '31',
          '48',
          '47',
          '46',
          '45',
          '44',
          '43',
          '42',
          '41'
        )
      }

      this.do_reactive()
    },

    ClearAll() {
      this.data.value.splice(0, this.data.value.length)
      this.do_reactive()
    },
  },
}
</script>

<style lang="sass" scoped>
@use '@styles/utils/f' as *
@import '@styles/vars'
@import '@styles/utils/distance'

._fcol_
	@include f('col')

.justify-content-center
		justify-content: center
.d-flex
	display: flex

.rows
	display: flex
	flex-wrap: wrap
	margin-left: -$base_distance
	margin-right: -$base_distance

.col
	padding:$base_distance

.my-1
	margin-top: $base_distance
	margin-bottom: $base_distance

.position-absolute
	position: absolute

.position-relative
	position: relative

.mt-2
	margin-top: $base_distance

.mb-2
	margin-bottom: $base_distance
</style>

<style lang="scss" scoped>
.st0 {
  opacity: 0.3;
}
.st1 {
  fill: #000000;
  opacity: 0.4;
}
.st2 {
  fill: #000000;
}
.st3 {
  fill: #d04d2f;
}
.st4 {
  fill: #28bc28;
}
.st8 {
  opacity: 0.3;
  enable-background: new;
}
.text {
  fill: #000000;
  font-family: 'SegoeUI-Semibold';
  font-size: 11px;
}
.text_hover {
  fill: #ffffff;
  font-family: 'SegoeUI-Semibold';
  font-size: 11px;
}
.tooth:hover * {
  cursor: pointer;
}
.whitening,
.implantation {
  display: none;
}
.tooth-btn {
  white-space: nowrap;
  padding: 10px 14px 10px 14px !important;
}

//png
.teeth-container {
  padding: 9px 0;
}
.tooth {
  display: inline-block;
  width: 100%;
  max-width: 45px;
  max-height: 95px;
  margin: 0 -2px;
  z-index: 10;
  img {
    max-width: 110%;
    max-height: 100%;
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5));
  }
}
.point {
  $height: 17px;

  width: 17px;
  height: $height;
  line-height: $height;
  top: -30px;
  left: 50%;
  transform: translate(-50%);

  font-size: 9px;
  font-family: 'SegoeUI-Semibold';
  color: #fff;
  font-weight: bold;
  text-align: center;

  background: #28bc28;
  border-radius: 50%;
  &.bottom {
    top: auto;
    bottom: -30px;
  }
  &:hover + img,
  & + img:hover {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5)) hue-rotate(180deg) !important;
  }
}
.active_tooth_jaw {
  img {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5)) hue-rotate(230deg);
  }
  span {
    background: #a1a4eb;
  }
}
.chosen_tooth {
  img {
    filter: hue-rotate(280deg);
  }
  span {
    background: #e000ff;
  }
}
.bottom-teeth {
  .caries::after {
    content: '*';
    top: -4px;
    left: 10px;
    bottom: auto;
    right: auto;
  }
  .implant img {
    transform: scaleY(-1);
  }
  .koren::after {
    top: 0;
  }
}
.mirror-x {
  transform: scaleX(-1);
}
.caries {
  img {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5));
  }
  &::after {
    content: '*';
    display: block;
    height: 13px;
    position: absolute;
    bottom: 7px;
    right: 9px;
    color: #000;
    font-size: 20px;
    font-weight: bold;

    opacity: 0.6;
  }
}
.implant {
  img {
    filter: none;
  }
}
.active_tooth {
  img {
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5)) hue-rotate(180deg) !important;
  }
  span {
    background: #6da9c9 !important;
  }
}
@media screen and (max-width: 400px) {
  .tooth {
    margin: 0 -4px !important;
  }
}
.koren {
  z-index: 1;
  img {
    filter: none;
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 35%;
    margin: 0 auto;
    right: 0;
    left: 0;
    position: absolute;
    top: auto;
    bottom: 0;
    background: #fff;
  }
}
.pulpit {
  img {
    filter: invert(1) brightness(3);
  }
}
</style>
