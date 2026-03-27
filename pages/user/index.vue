<template>
  <div class="profile-container">
    <!-- 头部信息 -->
    <div class="profile-header">
      <div class="avatar-container">
        <img src="@/static/logo.png" alt="用户头像" class="avatar" />
      </div>
      <h1 class="name">
        {{ userInfo.name }}
      </h1>
      <p class="title">
        {{ userInfo.title }}
      </p>
    </div>

    <!-- 详细信息卡片 -->
    <div class="profile-card">
      <h2>关于我</h2>
      <p class="bio">
        {{ userInfo.bio }}
      </p>
    </div>

    <!-- 联系信息 -->
    <div class="profile-card">
      <h2>联系方式</h2>
      <ul class="contact-list">
        <li v-for="(contact, index) in userInfo.contacts" :key="index">
          <i :class="contact.icon" />
          <span>{{ contact.value }}</span>
        </li>
      </ul>
    </div>

    <!-- 技能展示 -->
    <div class="profile-card">
      <h2>技能</h2>
      <ul class="skill-list">
        <li v-for="(skill, index) in userInfo.skills" :key="index">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-progress">
            <div class="progress-bar" :style="{ width: skill.level + '%' }" />
          </div>
        </li>
      </ul>
    </div>

    <!-- 教育经历 -->
    <div class="profile-card">
      <h2>教育经历</h2>
      <ul class="education-list">
        <li v-for="(edu, index) in userInfo.education" :key="index">
          <h3>{{ edu.school }}</h3>
          <p class="degree">
            {{ edu.degree }}
          </p>
          <p class="time">
            {{ edu.time }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const userInfo = reactive({
  name: '月落乌啼',
  title: '前端开发工程师',
  bio: '热爱前端技术，专注于Vue生态开发，追求优雅代码和最佳实践。',
  contacts: [
    { icon: 'fas fa-envelope', value: '484894717' },
    {
      icon: 'fab fa-github',
      value: 'https://gitee.com/zhou-yankai/vue-vite-uniapp-framework'
    }
  ],
  skills: [
    { name: 'Vue.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 }
  ],
  education: [
    {
      school: 'XX大学',
      degree: '计算机科学与技术 学士',
      time: '2016-2020'
    }
  ]
});
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.avatar-container {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f0f0f0;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.title {
  color: #666;
  font-size: 1.2rem;
}

.profile-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.bio {
  line-height: 1.6;
  color: #666;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
}

.contact-list i {
  width: 30px;
  color: #409eff;
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-list li {
  margin-bottom: 1rem;
}

.skill-name {
  display: block;
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #409eff;
  transition: width 0.3s ease;
}

.education-list {
  list-style: none;
  padding: 0;
}

.education-list li {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 2px solid #409eff;
}

.degree {
  color: #666;
  margin: 0.3rem 0;
}

.time {
  color: #999;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;
  }

  .name {
    font-size: 1.5rem;
  }
}
</style>
