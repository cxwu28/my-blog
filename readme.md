# 🚀 My Blog | 计算机系统学习与技术沉淀
[English](#english) | [中文](#chinese)

---

<a name="english"></a>
## 🏗️ Core Positioning (English)

This is a high-performance personal technical blog built on the **Astro** framework. It serves as a dedicated space for my **CS:APP (Computer Systems: A Programmer's Perspective)** study notes and an experimental ground for exploring frontend engineering and low-level performance optimization.

The site is committed to deconstructing complex computer system knowledge through **visualizations** and a **low-level perspective**.

* **Deep Dive into x86-64**: From matrix memory structures to register hierarchies, making assembly language accessible with custom cover images and flowcharts.
* **Ultimate Reading Experience**: Deeply customized for technical documentation, supporting MDX interactive components, LaTeX formulas, and specialized rendering for code snippets.
* **High-Performance Architecture**: Leverages Astro's **"Islands Architecture"** for lightning-fast page loads and zero runtime JavaScript overhead.

### 🛠️ Global Optimizations & Secondary Development (Changelog)

Based on the original Fork, I have implemented deep customizations for technical documentation and interaction:

#### 1. 🎨 Visual & Icon System Refactoring
* **Native SVG Support**: Decoupled from third-party icon libraries. By modifying component logic, it now supports direct calls to `.svg` vector files within the project, significantly improving customization flexibility and reducing external requests.
* **Enhanced Interaction Effects**: Added responsive dynamic feedback to **Links** and **Icons** site-wide, improving the tactile feel of the interface.

#### 2. 📝 Documentation & Rendering Enhancements
* **LaTeX Integration**: Integrated full support for mathematical formula rendering using $inline$ and $$display$$ modes, perfectly presenting logical deductions in computer systems.
* **MDX Rendering Optimization**:
    * **Inline Code Adaptation**: Resolved the "white text on white background" issue in dark/light modes for inline code, unifying them into elegant gray blocks.
    * **Componentized Posts**: Optimized the parsing engine to allow seamless nesting of complex interactive components within blog posts.

#### 3. 🔗 Logic & Navigation Optimization
* **Internal Linking**: Added a flexible internal reference mechanism, allowing logical associations between different articles, Categories, and Tags to build a networked knowledge graph.
* **Global Style Unification**: Recalibrated font sizes, line spacing, and layout details to ensure long-form technical articles maintain excellent readability across all devices.

---
<a name="chinese"></a>
## 🏗️ 网站核心定位 (Chinese)

这是一个基于 **Astro** 框架构建的高性能个人技术博客。它不仅是我记录 **CS:APP（深入理解计算机系统）** 学习笔记的阵地，也是我探索前端工程化、底层性能优化的实验场。

本站致力于通过**可视化的方式**和**底层的视角**，拆解复杂的计算机系统知识。

* **深度解构 x86-64**：从主存矩阵结构到寄存器体系，配合自研的封面图与流程图，让汇编语言不再晦涩。
* **极致阅读体验**：针对技术文档进行深度定制，支持 MDX 交互式组件、LaTeX 数学公式以及针对代码片段的特殊渲染。
* **高性能架构**：利用 Astro 的 **“群岛架构”（Islands Architecture）**，实现极速的页面加载与零运行时 JavaScript 负担。

### 🛠️ 全局优化与二次开发记录 (Changelog)

在原 Fork 项目的基础上，我针对技术文档的呈现需求和交互体验进行了深度定制与全局优化：

#### 1. 🎨 视觉与图标系统重构
* **本地 SVG 深度支持**：打破了原版对第三方图标库的依赖。通过修改组件逻辑，支持直接调用项目文件夹中的 `.svg` 矢量图，极大提升了图标定制的灵活性并减少了外部请求。
* **交互动效增强**：为全站的 **链接（Links）** 和 **图标（Icons）** 添加了响应式的动态反馈效果，提升了页面的操作触感。

#### 2. 📝 文献与内容渲染增强
* **LaTeX 公式功能**：集成了数学公式渲染支持，利用 $inline$ 和 $$display$$ 模式，能够完美呈现计算机系统中的逻辑推导。
* **MDX 渲染深度优化**：
    * **内联代码适配**：彻底解决了原主题在暗黑/明亮模式下代码片段“白底白字”的痛点，统一为优雅的灰底色块。
    * **组件化博文**：优化了解析引擎，使博文内可以无缝嵌套复杂的交互组件。

#### 3. 🔗 逻辑与导航优化
* **站内相互链接功能**：新增了灵活的内部引用机制，支持在不同文章、分类（Categories）与标签（Tags）之间建立逻辑关联，构建网状知识图谱。
* **全局样式统一**：重新校准了字号、行距与排版细节，确保长篇技术文章在多端均有良好的阅读舒适度。

---

## 🛠️ Tech Stack | 技术栈
* **Framework**: [Astro](https://astro.build/) (v4+)
* **Styling**: Tailwind CSS
* **Math**: LaTeX (via Remark-Math / KaTeX)
* **Deployment**: Cloudflare Pages
* **Version Control**: GitHub (cxwu -> main 发布流)

## 🚀 Quick Start | 快速启动

```bash
# 1. Clone development branch
git clone -b cxwu https://github.com/cxwu28/my-blog.git

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
---

## 📝 License

Copyright (c) 2023 - Present, Designed & Developed by [Zeon Studio](https://zeon.studio/)

**Code License:** Released under the [MIT](https://github.comzeon-studio/astroplate/blob/main/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their license, we don't have permission to share those images.