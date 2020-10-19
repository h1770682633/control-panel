<template>
  <div class="waterTable">
    <div class="table-box" :class="composing.hv=='h'?'horizontal':''">
      <p class="text">单位:mm</p>
      <ul class="table-list" :class="[isCenter=='1'?'textCenter':'',composing.direction=='right'?'right':'']" :style="{width:totalwidth+'px',height:totalheight+'px'}">
        <li class="table-item" 
          v-for="(item, index) in list" 
          :key="index" 
          :style="{ background: item.color,width:size.width+'px',height:size.height+'px'}"
          >
          <em>{{ item.num }}</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaterTable',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    //数字是否居中
    isCenter:{
      type: String,
      default: '0'
    },
    //横竖排和数字的方向
    composing:{
      type: Object,
      default (){
        return{
          hv: 'v', //vertical、horizontal
          direction: 'right',
        }
      } 
    },
    //每个块的尺寸
    size:{
      type: Object,
      default(){
        return {
          width: '20px',
          height : '20px',
        }
      }
    }
  },
  data() {
    //这里存放数据
    return {};
  },
  //计算属性 可对属性进行运算
  computed: {
    //根据数量计算总宽度
    totalwidth(){
      return this.composing.hv=='h'?((+this.size.width+1)*(+this.list.length)+1):(+this.size.width+2)
    },
    //根据数量计算总高度
    totalheight(){
      return this.composing.hv=='h'?(+this.size.height+2):((+this.size.height+1)*(+this.list.length)+1)
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
/* @import url(); 引入公共css类 */
.table-box {
  position: relative;
  width: auto;
  height: auto;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  p{
    white-space: nowrap; 
    font-size: 13px;
	  color: #000000;
    margin-left: -.5em;
    margin-bottom: 5px;
  }
  ul {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid #000000;
    li {
      flex: 1;
      position: relative;
      border-top: 1px solid #000000;
      &:last-of-type{
        border-top: none;
      }
      em {
        position: absolute;
        width: 100%;
        height: 106%;
        left: 140%;
        font-size: 14px;
        line-height: 14px;
        text-align: left;
        color: #000000;
        width: 20px;
        display: flex;
        flex-direction: column-reverse;
      }
    }
    //控制字体是否居中式
    &.textCenter{
      li{
        em{
          justify-content: center;
        }
      }
    }
    //控制字体左右显示
    &.right{
      li{
        em{
          left: auto;
          text-align: right;
          right: 140%;
        }
      }
    }
  }
  //控制整个排版横排
  &.horizontal{
    flex-direction: row-reverse;
    align-items: center;
    margin:30px auto 0;
    justify-content: center;
    p{
      margin-left: 10px;
      margin-bottom: 0;
    }
    ul{
      flex-direction: row;
      li {
        flex: 1;
        position: relative;
        border-top: none;
        border-right: 1px solid #000000;
        &:last-of-type{
          border-right: none;
        }
        em {
          position: absolute;
          width: 100%;
          height: 100%;
          left: -50%;
          right: auto;
          top: 106%;
          text-align: center;
          justify-content: center;
        }
      }
      //控制字体是否居中式
      &.textCenter{
        li{
          em{
            left: 0;
          }
        }
      }
      //控制字体左右显示
      &.right{
        li{
          em{
            top: auto;
            bottom: 106%;
          }
        }
      }
    }
  }
}
</style>
