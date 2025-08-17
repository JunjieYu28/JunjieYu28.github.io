---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat.

My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


<!--
# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
-->

<!-- 
# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** --> 

# 🔬 My Research
<!-- 在这里添加您的研究方向和兴趣 -->
- **Research Interests**: Multi-modal understanding, Diffusion Models, CV, AI for games
- **Current Focus**: Multi-model understanding
<!-- - **Collaborations**: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. -->

# 🎖 Honors and Awards
- *2023.12* 致远荣誉奖学金
- *2024.11* 本科生C等优秀奖学金
- *2024.12* 致远荣誉奖学金

# 📖 Educations

<style>
/* ===== Education section styles ===== */
:root{
  --edu-text:#111827;
  --edu-muted:#6b7280;
  --edu-accent:#0b5bd3;           /* 程序标签颜色（可自定义） */
  --edu-border:#e5e7eb;
}
@media (prefers-color-scheme: dark){
  :root{
    --edu-text:#c9d1d9;
    --edu-muted:#8b949e;
    --edu-accent:#58a6ff;
    --edu-border:#30363d;
  }
}

.edu-list{ display:flex; flex-direction:column; gap:10px; margin:6px 0 0; }
.edu-item{ padding:10px 12px; border:1px solid var(--edu-border); border-radius:10px; }
.edu-time{ font-size:14px; color:var(--edu-muted); margin-bottom:2px; }
.edu-school a{
  font-size:16px; font-weight:700; color:var(--edu-text);
  text-decoration:none; transition:text-decoration-color .15s ease;
}
.edu-school a:hover{ text-decoration:underline; text-underline-offset:2px; }

.edu-programs{ margin-top:4px; }
.edu-program{
  font-size:13px;                   /* 更小字号 */
  color:var(--edu-accent);          /* 另一种颜色 */
  font-weight:600;
}
.edu-sep{ margin:0 6px; color:var(--edu-muted); }
</style>

<div class="edu-list">

  <!-- 1) SJTU -->
  <div class="edu-item">
    <div class="edu-time">2023.09 – now</div>
    <div class="edu-school">
      <a href="https://www.sjtu.edu.cn/" target="_blank" rel="noopener">上海交通大学</a>
    </div>
    <div class="edu-programs">
      <span class="edu-program">人工智能卓越人才试点班</span>
      <span class="edu-sep">·</span>
      <span class="edu-program">致远工科荣誉计划</span>
    </div>
  </div>

  <!-- 2) CQ No.8 -->
  <div class="edu-item">
    <div class="edu-time">2020.09 – 2023.06</div>
    <div class="edu-school">
      <a href="https://cqbz.cn/" target="_blank" rel="noopener">重庆第八中学校</a>
    </div>
  </div>

</div>

<!--
# 💬 Invited Talks
 - *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships

<style>
/* ===== Internship section styles ===== */
:root{
  --intern-text:#111827;
  --intern-muted:#6b7280;
  --intern-accent:#0b5bd3;
  --intern-border:#e5e7eb;
}
@media (prefers-color-scheme: dark){
  :root{
    --intern-text:#c9d1d9;
    --intern-muted:#8b949e;
    --intern-accent:#58a6ff;
    --intern-border:#30363d;
  }
}

.intern-list{ display:flex; flex-direction:column; gap:10px; margin:6px 0 0; }
.intern-item{ padding:10px 12px; border:1px solid var(--intern-border); border-radius:10px; }
.intern-time{ font-size:14px; color:var(--intern-muted); margin-bottom:4px; }
.intern-title{ font-size:16px; font-weight:700; color:var(--intern-text); }
.intern-org{ font-size:14px; color:var(--intern-accent); margin-bottom:6px; }
.intern-resp{ font-size:13px; color:var(--intern-muted); margin-top:4px; }
.intern-resp ul{ margin:4px 0 0 18px; }
</style>

<div class="intern-list">

  <!-- 1) Summer Research Internship -->
  <div class="intern-item">
    <div class="intern-time">2024.07 – 2024.09</div>
    <div class="intern-title">Summer Research Internship</div>
    <div class="intern-org">SJTU – Artificial Intelligence Institute, DeepVision Lab</div>
    <div class="intern-resp">
      <ul>
        <li>Explored <strong>Computer Vision</strong> fundamentals.</li>
        <li>Learned to read research papers and reproduced basic CV algorithms.</li>
      </ul>
    </div>
  </div>

  <!-- 2) Research Internship -->
  <div class="intern-item">
    <div class="intern-time">2024.10 – Present</div>
    <div class="intern-title">Research Internship</div>
    <div class="intern-org">SJTU – Artificial Intelligence Institute, DeepVision Lab</div>
    <div class="intern-resp">
      <ul>
        <li>Conducting research on <strong>Parameter-Efficient Fine-Tuning (PEFT)</strong>.</li>
        <li>Working on <strong>Model Merging</strong> related research.</li>
      </ul>
    </div>
  </div>

</div>


# 📂 Projects

<style>
/* ===== Refined pinned cards (no overflow, compact) ===== */
.projects-grid{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 12px 0 6px;
}
@media (max-width: 820px){ .projects-grid{ grid-template-columns: 1fr; gap: 12px; } }

:root{
  --pj-card-bg:#fff; --pj-card-bd:#e5e7eb; --pj-card-tx:#111827; --pj-muted:#6b7280;
  --pj-hover-bd:#d1d5db; --pj-shadow:0 6px 20px rgba(17,24,39,.06);
  --pj-badge-bg:#e9f2ff; --pj-badge-tx:#0b5bd3; --pj-badge-bd:#cfe0ff;
  --pj-badge-bg-private:#ffeceb; --pj-badge-tx-private:#cf222e; --pj-badge-bd-private:#ffd3d0;
}
@media (prefers-color-scheme: dark){
  :root{
    --pj-card-bg:#0d1117; --pj-card-bd:#30363d; --pj-card-tx:#c9d1d9; --pj-muted:#8b949e;
    --pj-hover-bd:#3d444d; --pj-shadow:none;
    --pj-badge-bg:rgba(56,139,253,.18); --pj-badge-tx:#58a6ff; --pj-badge-bd:rgba(56,139,253,.3);
    --pj-badge-bg-private:rgba(255,129,130,.18); --pj-badge-tx-private:#ffa3a5; --pj-badge-bd-private:rgba(255,129,130,.3);
  }
}

.project-card{
  border:1px solid var(--pj-card-bd); background:var(--pj-card-bg); color:var(--pj-card-tx);
  border-radius:12px; padding:12px 14px; transition:border-color .18s, transform .12s, box-shadow .2s;
  display:flex; flex-direction:column; gap:8px;
}
.project-card:hover{ border-color:var(--pj-hover-bd); transform:translateY(-2px); box-shadow:var(--pj-shadow); }

.project-title{ font-size:16px; font-weight:700; line-height:1.25; margin:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.project-title a{ color:inherit; text-decoration:none; }
.project-title a:hover{ text-decoration:underline; }

.project-desc{ color:var(--pj-muted); font-size:14px; line-height:1.5; margin:0; }

.project-meta{
  display:flex; align-items:center; gap:14px; font-size:13px; color:var(--pj-muted); margin-top:2px;
}
.meta-left{ display:inline-flex; align-items:center; gap:8px; }
.lang-dot{ width:10px; height:10px; border-radius:50%; display:inline-block; margin-right:6px; vertical-align:-1px; }

.meta-right{ margin-left:auto; }
.pj-badge{
  display:inline-block;
  font-size:12px; line-height:1; padding:6px 10px; border-radius:999px;
  background:var(--pj-badge-bg); color:var(--pj-badge-tx); border:1px solid var(--pj-badge-bd);
  font-weight:600; white-space:nowrap; vertical-align:middle;
}
.pj-badge.pj-private{ background:var(--pj-badge-bg-private); color:var(--pj-badge-tx-private); border-color:var(--pj-badge-bd-private); }

.more-projects{ margin-top:6px; text-align:right; }
.more-projects a{ font-weight:600; text-decoration:none; }
.more-projects a:hover{ text-decoration:underline; }
</style>

<div class="projects-grid">

  <!-- 1 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/GUI-Project" target="_blank" rel="noopener">GUI-Project</a></h3>
    <p class="project-desc">Data preparation for training a GUI recognition model for future GUI Agent.</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#3572A5"></span>Python</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

  <!-- 2 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/ViT-on-Image-Classification" target="_blank" rel="noopener">ViT-on-Image-Classification</a></h3>
    <p class="project-desc">ViT on image classification, esp. small-scale datasets (CIFAR-10).</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#DA5B0B"></span>Jupyter Notebook</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

  <!-- 3 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/Regression-and-Classification-Prediction-of-Travellers" target="_blank" rel="noopener">Regression-and-Classification-Prediction-of-Travellers</a></h3>
    <p class="project-desc">Prediction of travellers based on historical travelling datasets (ml).</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#DA5B0B"></span>Jupyter Notebook</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

  <!-- 4 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/Voice-Based-Car-Controll" target="_blank" rel="noopener">Voice-Based-Car-Controll</a></h3>
    <p class="project-desc">A voice-controlled car powered by an speech recognition model trained on Edge Impulse and an ESP32 microcontroller.</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#555"></span>C</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

</div>

<div class="more-projects">
  <a href="https://github.com/JunjieYu28?tab=repositories" target="_blank" rel="noopener">More Projects →</a>
</div>
