<template>
  <div class="inner">
    <!-- 首页 -->
    <div class="content">
      <!-- 竖排 -->
      <ul class="vertical-list">
        <li class="vertacal-item" v-for="(item, index) in verticalList" :key="index">
          <water-table :list="item.list" :isCenter="item.isCenter" :composing="item.composing" :size="item.size"></water-table>
          <p class="item-title">{{ item.title }}</p>
        </li>
      </ul>
      <ul class="horizontal-list">
        <li class="horizontal-item" v-for="(item, index) in horizontalist" :key="index">
          <water-table :list="item.list" :isCenter="item.isCenter" :composing="item.composing" :size="item.size"></water-table>
          <p class="item-title">{{ item.title }}</p>
        </li>
      </ul>
      <div class="singal-box">
        <water-table :list="singal.list" :isCenter="singal.isCenter" :composing="singal.composing" :size="singal.size" :showUnit="singal.showUnit"></water-table>
      </div>
    </div>
  </div>
</template>

<script>
import WaterTable from '@/components/common/waterTable/WaterTable';

export default {
  name: 'Inner',
  components: {
    WaterTable,
  },
  data() {
    return {
      verticalList: [
        {
          title: '卡尺式',
          list: [
            {
              num: 0,
              color: '#ffffff',
            },
            {
              num: 0.1,
              color: '#a6f28f',
            },
            {
              num: 1.6,
              color: '#3dba3d',
            },
            {
              num: 7,
              color: '#61b8ff',
            },
            {
              num: 15,
              color: '#0000ff',
            },
            {
              num: 40,
              color: '#f304ed',
            },
            {
              num: 50,
              color: '#810042',
            },
          ],
          isCenter: '0',
          composing: {
            hv: 'v',
            directionH: 0, //0代表上，1代表下
            directionV: 1, //0代表左,1代表右
          },
          size: {
            width: '13px',
            height: '23px',
          },
        },
        {
          title: '居中式',
          list: [
            {
              num: 0,
              color: '#ffffff',
            },
            {
              num: 0.1,
              color: '#a6f28f',
            },
            {
              num: 1.6,
              color: '#3dba3d',
            },
            {
              num: 7,
              color: '#61b8ff',
            },
            {
              num: 15,
              color: '#0000ff',
            },
            {
              num: 40,
              color: '#f304ed',
            },
            {
              num: 50,
              color: '#810042',
            },
          ],
          isCenter: '1',
          composing: {
            hv: 'v',
            directionH: 0, //0代表上，1代表下
            directionV: 1, //0代表左,1代表右
          },
          size: {
            width: '13px',
            height: '23px',
          },
        },
        {
          title: '竖排·左',
          list: [
            {
              num: 0,
              color: '#ffffff',
            },
            {
              num: 0.1,
              color: '#a6f28f',
            },
            {
              num: 1.6,
              color: '#3dba3d',
            },
            {
              num: 7,
              color: '#61b8ff',
            },
            {
              num: 15,
              color: '#0000ff',
            },
            {
              num: 40,
              color: '#f304ed',
            },
            {
              num: 50,
              color: '#810042',
            },
          ],
          isCenter: '0',
          composing: {
            hv: 'v',
            directionH: 0, //0代表上，1代表下
            directionV: 0, //0代表左,1代表右
          },
          size: {
            width: '13px',
            height: '23px',
          },
        },
        {
          title: '竖排·右',
          list: [
            {
              num: 0,
              color: '#ffffff',
            },
            {
              num: 0.1,
              color: '#a6f28f',
            },
            {
              num: 1.6,
              color: '#3dba3d',
            },
            {
              num: 7,
              color: '#61b8ff',
            },
            {
              num: 15,
              color: '#0000ff',
            },
            {
              num: 40,
              color: '#f304ed',
            },
            {
              num: 50,
              color: '#810042',
            },
          ],
          isCenter: '0',
          composing: {
            hv: 'v',
            directionH: 0, //0代表上，1代表下
            directionV: 1, //0代表左,1代表右
          },
          size: {
            width: '13px',
            height: '23px',
          },
        },
      ],
      horizontalist: [
        {
          title: '横排下',
          list: [
            {
              num: 0,
              color: '#ffffff',
            },
            {
              num: 0.1,
              color: '#a6f28f',
            },
            {
              num: 1.6,
              color: '#3dba3d',
            },
            {
              num: 7,
              color: '#61b8ff',
            },
            {
              num: 15,
              color: '#0000ff',
            },
            {
              num: 40,
              color: '#f304ed',
            },
            {
              num: 50,
              color: '#810042',
            },
          ],
          isCenter: '0',
          composing: {
            hv: 'h',
            directionH: 1, //0代表上，1代表下
            directionV: 0, //0代表左,1代表右
          },
          size: {
            width: '22px',
            height: '13px',
          },
        },
        {
          title: '横排上',
          list: [
            {
              num: 0,
              color: '#ffffff',
            },
            {
              num: 0.1,
              color: '#a6f28f',
            },
            {
              num: 1.6,
              color: '#3dba3d',
            },
            {
              num: 7,
              color: '#61b8ff',
            },
            {
              num: 15,
              color: '#0000ff',
            },
            {
              num: 40,
              color: '#f304ed',
            },
            {
              num: 50,
              color: '#810042',
            },
          ],
          isCenter: '0',
          composing: {
            hv: 'h',
            directionH: 0, //0代表上，1代表下
            directionV: 0, //0代表左,1代表右
          },
          size: {
            width: '22px',
            height: '13px',
          },
        },
      ],
      singal: {
        list: [
          {
            color: '#ffffff',
          },
          {
            color: '#a6f28f',
          },
          {
            color: '#3dba3d',
          },
          {
            color: '#61b8ff',
          },
          {
            color: '#0000ff',
          },
          {
            color: '#f304ed',
          },
          {
            color: '#810042',
          },
        ],
        isCenter: '0',
        showUnit: false,
        composing: {
          hv: 'h',
          directionH: 0, //0代表上，1代表下
          directionV: 0, //0代表左,1代表右
        },
        size: {
          width: '22px',
          height: '13px',
        },
      },
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped="">
.content {
  position: relative;
  padding: 50px 16px 50px;
  width: 317px;
  background-color: #ffffff;
  border-radius: 2px;
  border: solid 3px #9aaae3;
  margin: 30px auto 0;
  .vertical-list {
    width: 286px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      position: relative;
      width: 63px;
      height: 225px;
      background-color: #ffffff;
      border: solid 1px #38a7f0;
      display: flex;
      justify-content: center;
      p {
        position: absolute;
        width: 100%;
        height: 23px;
        background-color: #38a7f0;
        bottom: 0;
        left: 0;
        text-align: center;
        line-height: 23px;
      }
    }
  }
  .horizontal-list {
    margin-top: 25px;
    li {
      position: relative;
      width: 267px;
      height: 63px;
      background-color: #ffffff;
      border: solid 1px #38a7f0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 23px;
      margin-top: 10px;
      &:first-of-type {
        margin-top: 0;
      }
      .item-title {
        position: absolute;
        left: 0;
        top: 0;
        width: 23px;
        height: 100%;
        background-color: #38a7f0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
    }
  }
  .singal-box {
    position: relative;
    width: 265px;
    height: 75px;
    margin-top: 30px;
    background-color: #ffffff;
    border: solid 1px #38a7f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
