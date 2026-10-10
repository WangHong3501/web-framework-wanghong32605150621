<template>
  <div class="note-card">
    <h3 class="card-title">📒 指令练习场</h3>
    <p class="subtitle">单文件组件 · data 是函数 · 局部注册三步</p>

    <!-- ① 插值 + 响应式 -->
    <div class="block">
      <div class="block-title">① 插值 {{ }} 与响应式</div>
      <p>{{ message }}</p>
      <p>{{ message.toUpperCase() }}</p>
      <p>{{ 1 + 2 * 3 }}</p>
      <p>count = <b>{{ count }}</b>（3 秒后自动变 100）</p>
    </div>

    <!-- ② v-text / v-html -->
    <div class="block">
      <div class="block-title">② v-text / v-html</div>
      <p v-text="rawText"></p>
      <p v-html="htmlText"></p>
    </div>

    <!-- ③ v-bind -->
    <div class="block">
      <div class="block-title">③ v-bind（简写 :）</div>
      <img :src="imgSrc" :title="tipTitle" class="logo" />
      <p :class="{ active: count > 0 }">count 大于 0 时这行变高亮</p>
    </div>

    <!-- ④ v-on -->
    <div class="block">
      <div class="block-title">④ v-on（简写 @）事件绑定</div>
      <div class="btn-row">
        <button @click="count++">count +1（内联语句）</button>
        <button @click="say('你好', $event)">say('你好', $event)（方法传参）</button>
      </div>
    </div>

    <!-- ⑤ v-model -->
    <div class="block">
      <div class="block-title">⑤ v-model 双向绑定（表单三件套）</div>
      <p class="live">实时 → 姓名：{{ form.name }}｜性别：{{ form.gender }}｜爱好：{{ form.hobbies.join('、') || '（未选）' }}</p>
      <input v-model="form.name" placeholder="输入姓名" />
      <div class="opt-row">
        <label><input type="radio" value="男" v-model="form.gender" /> 男</label>
        <label><input type="radio" value="女" v-model="form.gender" /> 女</label>
      </div>
      <div class="opt-row">
        <label><input type="checkbox" value="篮球" v-model="form.hobbies" /> 篮球</label>
        <label><input type="checkbox" value="编程" v-model="form.hobbies" /> 编程</label>
      </div>
    </div>

    <!-- ⑥ v-if / v-else / v-show -->
    <div class="block">
      <div class="block-title">⑥ v-if / v-else / v-show 条件渲染</div>
      <button @click="show = !show">切换显隐（观察 DevTools）</button>
      <p v-if="show" class="if-demo if-yes">v-if：条件为真我才被"渲染"出来</p>
      <p v-else class="if-demo if-no">v-else：上面条件为假时才轮到我</p>
      <p v-show="show" class="if-demo if-show">v-show：我一直存在，只是 display:none 藏起来</p>
    </div>

    <!-- ⑦ v-for + 响应式验证 -->
    <div class="block">
      <div class="block-title">⑦ v-for 列表渲染 + 响应式验证</div>
      <ul class="subjects">
        <li v-for="(subject, index) in subjects" :key="index">
          {{ index }} - {{ subject }}
        </li>
      </ul>
      <div class="btn-row">
        <button @click="subjects[1] = '英语（索引赋值）'">数组索引赋值</button>
        <button @click="form.school = '成都理工大学工程技术学院'">对象新增属性</button>
      </div>
      <p v-if="form.school" class="school">🏫 {{ form.school }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  data() {
    return {
      // 任务 1 骨架
      title: '我的第一条笔记',
      // 任务 2 插值 + 响应式
      message: 'hello vue',
      count: 0,
      // 3.1 v-text / v-html
      rawText: '<b>我是 v-text 的纯文本</b>',
      htmlText: '<b>我是 v-html 解析出的加粗</b>',
      // 3.2 v-bind
      imgSrc: 'https://vuejs.org/images/logo.svg',
      tipTitle: '我是 :title 绑定的悬停提示',
      // 3.4 v-model
      form: { name: '', gender: '', hobbies: [] },
      // 3.5 条件渲染
      show: true,
      // 3.6 列表渲染
      subjects: ['语文', '数学', 'Vue']
    }
  },
  methods: {
    say(word, event) {
      alert(word + '｜事件类型：' + event.type)
    }
  },
  mounted() {
    setTimeout(() => {
      this.count = 100
    }, 3000)
  }
}
</script>

<style scoped>
.note-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-top: 3px solid #2563eb;
  border-radius: 12px;
  padding: 22px 26px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}
.card-title { margin: 0; font-size: 17px; color: #0f172a; }
.subtitle { margin: 2px 0 8px; font-size: 12px; color: #94a3b8; }

.block { padding: 14px 0; border-top: 1px dashed #eef2f7; }
.block:first-of-type { border-top: none; padding-top: 4px; }
.block-title {
  font-size: 12px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}
.block p { margin: 4px 0; font-size: 14px; color: #334155; }

.btn-row { display: flex; gap: 8px; flex-wrap: wrap; }
.opt-row { display: flex; gap: 16px; margin: 6px 0; font-size: 14px; color: #334155; }
.opt-row label { cursor: pointer; }

.live {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
}
.logo { width: 56px; vertical-align: middle; margin: 4px 0; }
.active { color: #2563eb; font-weight: 600; }

.subjects { padding-left: 20px; margin: 6px 0; font-size: 14px; color: #334155; }
.subjects li { margin: 2px 0; }

.if-demo {
  padding: 6px 10px;
  border-radius: 8px;
  margin: 6px 0;
  font-size: 13px;
}
.if-yes { background: #eff6ff; color: #1d4ed8; }
.if-no { background: #fef2f2; color: #b91c1c; }
.if-show { background: #f1f5f9; color: #64748b; }

.school { color: #64748b; margin: 6px 0 0; font-size: 14px; }
</style>
