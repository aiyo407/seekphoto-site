<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>隐私政策</h1>
        <p>最后更新：2026 年 8 月 1 日</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="legal-content">
          <p class="intro">
            觅影随笔（以下简称"本应用"）是一款个人开发者制作的本地图片管理项目。
            本项目高度重视你的隐私，本政策详细说明本应用如何处理你的数据。
          </p>

          <h2>一、数据存储位置</h2>
          <p>
            本应用的所有数据均存储在你的本地电脑上，不会上传到任何服务器。
            包括照片文件、缩略图、索引数据、人脸数据、配置信息等，全部保存在你电脑的本地目录中。
          </p>

          <h2>二、本项目处理哪些数据</h2>
          <p>本应用在运行过程中会处理以下数据，但<strong>所有处理均在本地完成，不会外传</strong>：</p>
          <ul>
            <li><strong>照片文件</strong>：你主动添加到应用中的图片文件（JPG、PNG、BMP、WebP 等）</li>
            <li><strong>照片元数据</strong>：从照片 EXIF 中读取的拍摄时间、相机型号、GPS 位置等信息</li>
            <li><strong>AI 向量数据</strong>：照片的语义特征向量，用于支持文字搜索功能</li>
            <li><strong>人脸特征数据</strong>：照片中检测到的人脸特征向量，用于人物分类功能</li>
            <li><strong>缩略图</strong>：为加快浏览速度而生成的照片缩略图</li>
            <li><strong>使用配置</strong>：你的个性化设置，如主题、语言、目录路径等</li>
          </ul>

          <h2>三、数据如何被处理</h2>
          <p>本应用的数据处理完全在你本地电脑上完成：</p>
          <ul>
            <li><strong>AI 推理</strong>：内置 ONNX 模型在本地运行，不依赖云端服务</li>
            <li><strong>人脸识别</strong>：人脸检测和特征提取在本地完成，不会上传到云端</li>
            <li><strong>向量搜索</strong>：本地向量数据库（LanceDB）支持语义搜索，无需联网</li>
            <li><strong>本地存储</strong>：所有数据保存在本地电脑的应用数据目录中</li>
          </ul>

          <h2>四、网络访问说明</h2>
          <p>本应用在以下情况下会访问网络，<strong>除此之外完全离线运行</strong>：</p>
          <ul>
            <li><strong>模型下载</strong>：首次使用时下载 AI 模型文件（约 700MB），下载完成后可离线使用</li>
            <li><strong>版本更新检查</strong>：启动时静默检查是否有新版本（可关闭）</li>
          </ul>
          <p>网络访问仅用于上述明确目的，不会上传你的照片或个人数据。</p>

          <h2>五、第三方组件</h2>
          <p>本应用使用以下开源第三方组件，这些组件均在本地运行：</p>
          <ul>
            <li><strong>ONNX Runtime</strong>：AI 模型推理引擎</li>
            <li><strong>LanceDB</strong>：本地向量数据库</li>
            <li><strong>SQLite</strong>：本地关系型数据库</li>
            <li><strong>Tauri</strong>：桌面应用框架</li>
            <li><strong>YuNet / MobileFaceNet</strong>：人脸检测与识别模型</li>
          </ul>
          <p>这些组件不会向外部发送数据，所有运算均在本地完成。</p>

          <h2>六、你的权利</h2>
          <p>由于所有数据都存储在你的本地电脑上，你拥有完全的控制权：</p>
          <ul>
            <li><strong>查看权</strong>：可以随时在应用目录中查看所有数据文件</li>
            <li><strong>删除权</strong>：删除应用目录或卸载应用即可彻底清除所有数据</li>
            <li><strong>导出权</strong>：可以通过应用内置的备份功能导出数据</li>
            <li><strong>控制权</strong>：可以随时停止使用、删除照片、清除索引</li>
          </ul>

          <h2>七、数据安全</h2>
          <p>
            本应用采用本地存储模式，你的数据不会离开你的电脑，因此不存在数据泄露风险。
            所有处理逻辑、特征向量、配置信息均保存在本地电脑的应用数据目录中，由你完全掌控。
          </p>

          <h2>八、儿童隐私</h2>
          <p>
            本应用不针对 13 岁以下儿童，也不会故意收集儿童的个人信息。
            如果家长发现孩子未经同意使用了本应用，可以随时删除相关数据。
          </p>

          <h2>九、政策变更</h2>
          <p>
            本隐私政策可能会不时更新，更新后的政策将在应用内或本页面公布。
            重大变更会通过应用内通知的方式告知你。
          </p>

          <h2>十、联系我们</h2>
          <p>如果你对本隐私政策有任何疑问，可以通过以下方式联系：</p>
          <ul>
            <li>邮箱：aiyo407@163.com</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page-hero {
  padding: 160px 0 60px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
}

.page-hero h1 {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.page-hero p {
  font-size: 15px;
  color: var(--text-secondary);
}

.content-section {
  padding: 64px 0 120px;
}

.legal-content {
  max-width: 760px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.intro {
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 32px;
  padding: 20px 24px;
  background: var(--bg);
  border-radius: var(--radius);
  border-left: 3px solid var(--primary);
}

.legal-content h2 {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 40px;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.legal-content p {
  margin-bottom: 16px;
}

.legal-content ul {
  margin: 12px 0 20px;
  padding-left: 4px;
  list-style: none;
}

.legal-content li {
  padding: 6px 0 6px 24px;
  position: relative;
}

.legal-content li::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 14px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.legal-content strong {
  color: var(--text-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 40px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .content-section {
    padding: 40px 0 80px;
  }

  .legal-content {
    font-size: 14px;
  }

  .legal-content h2 {
    font-size: 19px;
  }
}
</style>
