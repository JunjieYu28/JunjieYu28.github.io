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
<!-- 在这里添加您的研究方向和兴趣 
- **Research Interests**: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- **Current Focus**: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- **Collaborations**: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
-->

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
    <p class="project-desc">Data preparation for training a GUI recognition model.</p>
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
    <p class="project-desc">Prediction of travellers based on historical travelling datasets (AI2611).</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#DA5B0B"></span>Jupyter Notebook</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

  <!-- 4 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/Voice-Based-Car-Controll" target="_blank" rel="noopener">Voice-Based-Car-Controll</a></h3>
    <p class="project-desc">Voice-based car control (AI2618 project).</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#555"></span>C</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

  <!-- 5 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/LC3-Simulator-Implementation" target="_blank" rel="noopener">LC3-Simulator-Implementation</a></h3>
    <p class="project-desc">LC3 simulator implementation (CS2651 project).</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#555"></span>C</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

  <!-- 6 -->
  <div class="project-card">
    <h3 class="project-title"><a href="https://github.com/JunjieYu28/JunjieYu28.github.io" target="_blank" rel="noopener">JunjieYu28.github.io</a></h3>
    <p class="project-desc">Augety's homepage (forked from acad-homepage).</p>
    <div class="project-meta">
      <span class="meta-left"><span class="lang-dot" style="background:#c6538c"></span>SCSS</span>
      <span class="meta-right"><span class="pj-badge">Public</span></span>
    </div>
  </div>

</div>

<div class="more-projects">
  <a href="https://github.com/JunjieYu28?tab=repositories" target="_blank" rel="noopener">More Projects →</a>
</div>




# 🎖 Honors and Awards
<!-- - *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📖 Educations
<!-- - *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->
  
<!--
# 💬 Invited Talks
 - *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships
<!-- - *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->
