<template>
  <div class="home">
    <!-- 首页 -->
    <div class="content">
      <div class="control-panel">
        <h2 class="panel-title">色谱设置</h2>
        <div class="panel-box">
          <div class="panel-style number-style">
            <p class="panel-tag">数值样式</p>
            <ul class="radio-list">
              <li class="radio-item">
                <label><input type="radio" v-model="params.isCenter" value="0" />卡尺式</label>
              </li>
              <li class="radio-item">
                <label><input type="radio" v-model="params.isCenter" value="1" />居中式</label>
              </li>
            </ul>
          </div>
          <div class="panel-style composing-style">
            <p class="panel-tag">排列样式</p>
            <ul class="radio-list">
              <li class="radio-item">
                <label><input type="radio" v-model="params.isCenter" value="0" />竖排</label>
                <div class="dir-panel">
                  数值在
                  <p class="dir-wrap">
                    <em>左</em>
                    <em>右</em>
                  </p>
                </div>
              </li>
              <li class="radio-item">
                <label><input type="radio" v-model="params.isCenter" value="1" />横排</label>
                <div class="dir-panel">
                  数值在
                  <p class="dir-wrap">
                    <em>上</em>
                    <em>下</em>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <water-table :list="params.list" :isCenter="params.isCenter" :composing="params.composing" :size="params.size"></water-table>
    </div>
  </div>
</template>

<script>
import WaterTable from '../components/common/waterTable/WaterTable';

export default {
  name: 'Home',
  components: {
    WaterTable,
  },
  data() {
    return {
      params: {
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
          direction: 'right',
        },
        size: {
          width: '20',
          height: '20',
        },
      },
    };
  },
};
</script>
<style lang="less" scoped="">
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 50px;
}
.control-panel {
  position: relative;
  width: 265px;
  height: 217px;
  background-color: #f8feff;
  box-shadow: 0px 6px 23px 1px rgba(0, 0, 0, 0.18);
  border-radius: 2px;
  overflow: hidden;
  margin-right: 50px;
  &::before {
    position: absolute;
    content: '';
    height: 32px;
    width: 100%;
    background-color: #e6f4f7;
    top: 0;
    left: 0;
  }
  .panel-title {
    position: relative;
    width: 71px;
    height: 32px;
    background-color: #38a7f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #ffffff;
    font-weight: normal;
    &::after {
      position: absolute;
      content: '';
      width: 4px;
      height: 4px;
      left: 100%;
      top: 50%;
      margin-top: -3px;
      border: 4px solid transparent;
      border-left: 5px solid #38a7f0;
      z-index: 2;
    }
  }
}
.panel-box {
  position: relative;
  padding: 0 10px;
  .panel-style {
    position: relative;
    padding: 8px 0 8px 12px;
    border-bottom: 1px dashed rgba(101, 101, 101, 0.5);
    .panel-tag {
      position: relative;
      font-size: 14px;
      color: #656565;
      &::before {
        position: absolute;
        content: '';
        width: 3px;
        height: 12px;
        background-color: #f89751;
        border-radius: 1px;
        left: -9px;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }

    label {
      display: flex;
      align-items: center;
    }
    input[type='radio'] {
      width: 12px;
      height: 12px;
      border: solid 1px #47a1dd;
      margin-right: 5px;
    }
    input:checked + label {
      background-color: #fe6d32;
      border: 1px solid #fe6d32;
    }
    input:checked + label::after {
      position: absolute;
      content: '';
      width: 5px;
      height: 10px;
      top: 3px;
      left: 6px;
      border: 2px solid #fff;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
    &.number-style {
      display: flex;
      align-items: center;
      ul {
        margin-left: 22px;
        display: flex;
        align-items: center;
        li {
          margin-left: 27px;
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
    &.composing-style {
      ul {
        width: 100%;
        li {
          display: flex;
          margin-top: 8px;
          &:first-of-type {
            margin-top: 5px;
          }
          .dir-panel {
            display: flex;
            margin-left: 20px;
            .dir-wrap {
              width: 41px;
              height: 16px;
              border-radius: 2px;
              background: #47a1dd;
              margin-left: 5px;
              padding: 1px;
              em {
                display: inline-block;
                width: 50%;
                height: 100%;
                font-size: 12px;
                color: #ffffff;
                line-height: 14px;
                text-align: center;
                &.active {
                  background: #ffffff;
                  color: #7e7e7e;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
