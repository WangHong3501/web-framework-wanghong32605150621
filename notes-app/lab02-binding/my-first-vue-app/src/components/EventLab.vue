<template>
  <div class="event-lab">
    <h3 class="lab-title">🎯 事件实验室</h3>
    <p class="subtitle">2.4 事件对象 · 2.5 事件修饰符</p>

    <!-- ① 事件对象获取 -->
    <div class="block">
      <div class="block-title">① 事件对象 $event</div>
      <div class="btn-row">
        <button @click="showEvent">打印事件对象（不传参）</button>
        <button @click="showEventArg($event, 66)">showEventArg($event, 66)（传参版）</button>
      </div>
      <a href="https://vuejs.org" @click="goVue" class="demo-link">Vue 官网链接（手动 preventDefault）</a>
    </div>

    <!-- ② .stop 冒泡 -->
    <div class="block">
      <div class="block-title">② .stop 阻止冒泡</div>
      <div class="bubble" @click="log('outer 触发（外层 @click）')">
        <button @click.stop="log('inner 触发（.stop：冒泡被阻止）')">内层 .stop</button>
        <button @click="log('inner 触发（无 .stop：冒泡到外层）')">内层 无.stop</button>
      </div>
    </div>

    <!-- ③ .prevent / .once / .self -->
    <div class="block">
      <div class="block-title">③ .prevent / .once / .self</div>
      <a href="https://vuejs.org" @click.prevent="log('.prevent 阻止了跳转')" class="demo-link">Vue 官网（.prevent 版）</a>
      <div class="btn-row">
        <button @click.once="log('`.once` 抽奖按钮：只触发这一次！')">抽奖按钮 .once</button>
      </div>
      <div class="self-box" @click.self="log('.self：点到盒子本身才触发')">
        点盒子本身（.self）<button>我是子元素（点我没用）</button>
      </div>
    </div>

    <!-- ④ 键盘修饰符 -->
    <div class="block">
      <div class="block-title">④ 键盘修饰符 .enter / .esc</div>
      <input
        @keyup.enter="log('回车 .enter 触发')"
        @keyup.esc="log('Esc .esc 触发')"
        placeholder="这里按 Enter / Esc 试试"
      />
    </div>

    <!-- 日志区 -->
    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'EventLab',
  data() {
    return { logs: [] }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)
      console.log(msg)
    },
    showEvent(e) {
      this.log(`type=${e.type}｜target=<${e.target.tagName.toLowerCase()}>｜timeStamp=${Math.round(e.timeStamp)}ms`)
      console.log('完整事件对象：', e)
    },
    showEventArg(e, number) {
      this.log(`传参版：target=<${e.target.tagName.toLowerCase()}>｜number=${number}`)
    },
    goVue(e) {
      e.preventDefault()
      this.log('手动 preventDefault() 阻止了跳转')
    }
  }
}
</script>

<style scoped>
.event-lab {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-top: 3px solid #2563eb;
  border-radius: 12px;
  padding: 22px 26px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}
.lab-title { margin: 0; font-size: 17px; color: #0f172a; }
.subtitle { margin: 2px 0 8px; font-size: 12px; color: #94a3b8; }

.block { padding: 14px 0; border-top: 1px dashed #eef2f7; }
.block:first-of-type { border-top: none; padding-top: 4px; }
.block-title { font-size: 12px; font-weight: 600; color: #2563eb; margin-bottom: 8px; }

.btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 6px 0; }
.demo-link { display: inline-block; margin: 6px 0; color: #2563eb; font-size: 14px; }

.bubble {
  border: 2px solid #dbeafe;
  background: #eff6ff;
  padding: 10px 12px;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.self-box {
  border: 2px dotted #94a3b8;
  background: #f8fafc;
  padding: 10px 12px;
  border-radius: 8px;
  margin: 6px 0;
  font-size: 14px;
  color: #334155;
}
.self-box button { margin-left: 8px; }

input { padding: 6px 10px; border: 1px solid #e2e8f0; border-radius: 8px; font: inherit; }
input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12); }

.logs {
  background: #f8fafc;
  border-left: 3px solid #2563eb;
  margin: 12px 0 0;
  padding: 8px 12px 8px 28px;
  color: #475569;
  font-size: 13px;
  border-radius: 0 8px 8px 0;
  min-height: 2em;
}
.logs li { margin: 2px 0; }
</style>
