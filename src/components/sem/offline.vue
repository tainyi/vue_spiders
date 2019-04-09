<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="offline-form"
      ref="form"
    >
      <el-row
        type="flex"
        justify="space-around"
      >
        <el-col :span="6">
          <el-form-item
            label="关键词"
            prop="keyword"
          >
            <el-input
              v-model="formInline.keyword"
              placeholder="关键词"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item
            label="计划"
            prop="plan"
          >
            <el-select
              v-model="formInline.plan"
              placeholder="计划"
            >
              <el-option
                label="计划一"
                value="计划一"
              ></el-option>
              <el-option
                label="计划二"
                value="计划二"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item
            label="单元"
            prop="unit"
          >
            <el-select
              v-model="formInline.unit"
              placeholder="单元"
            >
              <el-option
                label="单元一"
                value="单元一"
              ></el-option>
              <el-option
                label="单元二"
                value="单元二"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="space-around"
      >
        <el-col :span="6">
          <el-form-item
            label="广告位"
            prop="advertising"
          >
            <el-select
              v-model="formInline.advertising"
              placeholder="广告位"
            >
              <el-option
                label="广告位一"
                value="广告位一"
              ></el-option>
              <el-option
                label="广告位二"
                value="广告位二"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item
            label="应用"
            prop="app"
          >
            <el-select
              v-model="formInline.app"
              placeholder="应用"
            >
              <el-option
                label="应用一"
                value="应用一"
              ></el-option>
              <el-option
                label="应用二"
                value="应用二"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit()"
            >查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <Echarts :option='option'></Echarts>
  </div>
</template>
<style lang="less">
    .offline-form .el-input__inner{
        padding-right: 30px;
    }
</style>

<script>
import { setTimeout, setInterval, clearInterval } from "timers";
import Echarts from "../../components/echarts/echarts";
export default {
  name: "offline",
  components: { Echarts },
  // component:
  data() {
    return {
      timer: null,
      //表单
      formInline: {
        keyword: "",
        plan: ""
      },
      //echarts
      option: {
        title: {
          text: "离线数据"
        },
        legend: {
          orient: "vertical",
          right: "0",
          data: [
            "ltv",
            "新增",
            "激活",
            "曝光",
            "点击",
            "到达",
            "下载",
            "计费",
            "出价",
            "排名"
          ]
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {},
        series: [
          {
            name: "ltv",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "新增",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "激活",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "曝光",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "点击",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "到达",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "下载",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "计费",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "出价",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "排名",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      }
    };
  },
  methods: {
    //计时器模拟实时数据
    setData() {
      let x_Axis = this.option.xAxis.data[0];
      this.option.xAxis.data.shift();
      this.option.xAxis.data.push(x_Axis);
      this.option.series.forEach(element => {
        element.data.shift();
        element.data.push(Math.round(Math.random() * 100));
      });
    },

    updateData() {
      this.timer = setInterval(() => {
        this.setData();
      }, 2100);
    },

    onSubmit() {
      this.$refs.form.resetFields();
    }
  },
  mounted() {
    this.updateData();
  }
};
</script>
