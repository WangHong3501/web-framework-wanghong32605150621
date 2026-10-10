<template>
  <div id="app">
    <h1>📝 记事本 notes-app <small>第 2 章实验</small></h1>

    <NoteCard />

    <h2>✨ 记事本雏形（综合任务）</h2>
    <div class="note-panel">
      <!-- 输入区 -->
      <div class="input-row">
        <input
          v-model="newNote"
          placeholder="输入笔记内容，回车快速添加"
          @keyup.enter="addNote"
          @keyup.esc="newNote = ''"
        />
        <button class="primary" @click="addNote">添加</button>
      </div>

      <!-- 选项区 -->
      <div class="opt-row">
        <span class="opt-label">优先级：</span>
        <label><input type="radio" value="高" v-model="priority" /> 高</label>
        <label><input type="radio" value="中" v-model="priority" /> 中</label>
        <label><input type="radio" value="低" v-model="priority" /> 低</label>
      </div>
      <div class="opt-row">
        <span class="opt-label">标签：</span>
        <label><input type="checkbox" value="待办" v-model="tags" /> 待办</label>
        <label><input type="checkbox" value="灵感" v-model="tags" /> 灵感</label>
      </div>

      <p class="live">实时 → 内容：{{ newNote || '（空）' }}｜优先级：{{ priority }}｜标签：{{ tags.join('、') || '（未选）' }}</p>

      <!-- 列表 -->
      <ul class="note-list">
        <li v-for="(note, index) in notes" :key="note.id" class="note-item">
          <span class="idx">{{ index + 1 }}</span>
          <span class="text">{{ note.text }}</span>
          <span class="badge" :class="'p-' + note.priority">{{ note.priority }}</span>
          <span class="tags">{{ note.tags.join('/') }}</span>
          <button class="del" @click="notes.splice(index, 1)">删除</button>
        </li>
      </ul>

      <p v-if="notes.length === 0" class="empty">暂无笔记，快添加一条吧 ✏️</p>
      <p v-show="notes.length > 0" class="count">共 {{ notes.length }} 条</p>
    </div>

    <h2>🎯 事件实验室（2.4—2.5）</h2>
    <EventLab />
  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
import EventLab from './components/EventLab.vue'
export default {
  components: { NoteCard, EventLab },
  data() {
    return {
      newNote: '',
      priority: '中',
      tags: [],
      notes: [],
      nextId: 1
    }
  },
  methods: {
    addNote() {
      if (!this.newNote.trim()) return
      this.notes.push({
        id: this.nextId++,
        text: this.newNote.trim(),
        priority: this.priority,
        tags: [...this.tags]
      })
      this.newNote = ''
    }
  }
}
</script>

<style scoped>
.note-panel {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px 26px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}

.input-row { display: flex; gap: 8px; margin-bottom: 14px; }
.input-row input { flex: 1; padding: 9px 12px; }

button.primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
  padding: 9px 20px;
}
button.primary:hover { background: #1d4ed8; border-color: #1d4ed8; color: #fff; }

.opt-row { display: flex; gap: 16px; align-items: center; margin: 6px 0; font-size: 14px; color: #334155; }
.opt-row label { cursor: pointer; }
.opt-label { color: #94a3b8; font-size: 13px; }

.live {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  margin: 12px 0;
}

.note-list { list-style: none; padding: 0; margin: 12px 0; }
.note-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 1px solid #f1f5f9;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
}
.note-item:hover { background: #f8fafc; }
.idx { color: #94a3b8; width: 20px; font-size: 13px; }
.text { flex: 1; }

.badge { font-size: 12px; padding: 2px 9px; border-radius: 10px; font-weight: 500; }
.badge.p-高 { background: #fee2e2; color: #b91c1c; }
.badge.p-中 { background: #fef3c7; color: #b45309; }
.badge.p-低 { background: #dbeafe; color: #1d4ed8; }

.tags { font-size: 12px; color: #94a3b8; }
.del { font-size: 12px; padding: 3px 10px; color: #94a3b8; border-color: #e2e8f0; }
.del:hover { color: #ef4444; border-color: #fca5a5; }

.empty { text-align: center; color: #94a3b8; padding: 32px 0; font-size: 14px; }
.count { text-align: right; font-size: 13px; color: #94a3b8; margin: 8px 0 0; }
</style>
