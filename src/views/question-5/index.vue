<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/var.styl'
  
  .question-5 { padding-bottom: .6rem;
  }
  /* level 2th start */
  .level-2th > .header,
  .level-2th > .title {font-size: 20px;}
  .level-2th > .header .subtitle {font-size: 16px;}
  /* level 2th end */

  /* level 3th start */
  .level-3th > .header,
  .level-3th > .title {font-size: 18px;}
  .level-3th > .content {font-size: 16px;}
  /* level 3th end */

  /* level 4th start */
  .level-4th > .header,
  .level-4th > .title {font-size: 16px; color: #ff5346;}
  .level-4th > .content {font-size: 14px;}
  .level-4th.attention {color: #ff5346;}
  /* level 4th end */

  img { width: 100%; display: block; }
  /* 元素高宽比 开始 */
  .ratio {position: relative; height: 0;}
  .ratio.ratio-15 {padding-top: 15%;}
  .ratio.ratio-25 {padding-top: 25%;}
  .ratio.ratio-35 {padding-top: 35%;}
  .ratio.ratio-40 {padding-top: 40%;}
  .ratio.ratio-80 {padding-top: 80%;}
  .ratio.ratio-100 {padding-top: 100%;}
  .ratio.ratio-120 {padding-top: 120%;}
  .ratio.ratio-133 {padding-top: 133%;}
  .ratio.ratio-260 {padding-top: 26%;}
  .ratio img,
  .ratio .img {position: absolute; top: 0; left: 0; width: 100%; height: 100%;}
  .ratio .img {background: no-repeat center; background-size: cover;}
  /* 元素高宽比 结束 */

  /* 图像高宽比页面 开始 */
  .page-image-ratio .level-3th {padding: 10px;}
  .page-image-ratio .level-4th {padding: 5px 0;}
  .page-image-ratio .level-5th > .title,
  .page-image-ratio .level-5th > .content,
  .page-image-ratio .level-5th > .tip {padding: 5px 0;}
  .page-image-ratio .example > .content {padding-top: 10px;}
  .page-image-ratio .example .list > li {padding-top: 10px;}
  .page-image-ratio .example .list > li:first-child {padding-top: 0;}
  .page-image-ratio .example .level-5th {box-shadow: 0 0 3px #ddd; background: #fff;}
  .page-image-ratio .example .level-5th > .title,
  .page-image-ratio .example .level-5th > .desc {padding: 7px 10px;}
  .page-image-ratio .example .level-5th > .desc {font-size: 12px;}
  .page-image-ratio .theory li:nth-child(1) .ratio {width: 100%; padding-top: 200px;}
  .page-image-ratio .level-5th > .content > .list {margin-top: 15px;}
  /* 图像高宽比页面 开始 */
</style>

<template>
  <div class="question-5 page_image_ratio">
    <section class="level-3th">
      <h3 class="title">图像高宽比</h3>
      <div class="content">
        <!-- 示例 开始 -->
        <section class="level-4th example">
          <h4 class="title">举个栗子</h4>
          <div class="content">
            <ul class="list">
                <li>
                  <article class="level-5th">
                    <h5 class="title">第一种方式：请查看示例代码</h5>
                    <!-- 示例代码 开始 -->
                    <div class="ratio ratio-120">
                      <img src="@/assets/images/img-holder-1.jpg">
                    </div>
                    <!-- 示例代码 结束 -->
                    <div class="desc">
                      直接使用&lt;img&gt;标签，用户须上传高宽比固定的图像，并且预设的高宽比接近。
                    </div>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">第一种方式：请查看示例代码</h5>
                    <!-- 示例代码 开始 -->
                    <div class="ratio ratio-133">
                      <img src="@/assets/images/img-holder-2.jpg">
                    </div>
                    <!-- 示例代码 结束 -->
                    <div class="desc">
                      一般用在首页banner或轮播，以及高宽比固定的文字图像。
                    </div>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">第二种方式：请查看示例代码</h5>
                    <!-- 示例代码 开始 -->
                    <div class="ratio ratio-40">
                      <span
                        class="img"
                        :style="{'background-image': 'url(' + require('@/assets/images/img-holder-4.jpg') + ')'}"></span>
                    </div>
                    <!-- 示例代码 结束 -->
                    <div class="desc">
                      使用背景图像。
                    </div>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">第二种方式：请查看示例代码</h5>
                    <!-- 示例代码 开始 -->
                    <div class="ratio ratio-40">
                      <span
                        class="img"
                        :style="{'background-image': 'url(' + require('@/assets/images/img-holder-4.jpg') + ')'}"></span>
                    </div>
                    <!-- 示例代码 结束 -->
                    <div class="desc">
                      一般用在带有描述的图像列表。
                    </div>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">第二种方式：请查看示例代码</h5>
                    <!-- 示例代码 开始 -->
                    <div class="ratio ratio-40">
                      <span
                        class="img"
                        :style="{'background-image': 'url(' + require('@/assets/images/img-holder-5.jpg') + ')'}"></span>
                    </div>
                    <!-- 示例代码 结束 -->
                    <div class="desc">
                      尽管用户上传的图像尺寸不尽相同，但是这种方式却能以相同的尺寸予以展示，并且保证图像不变形。
                    </div>
                  </article>
                </li>
              </ul>
          </div>
        </section>
        <!-- 示例 结束 -->
        <!-- 原理 开始 -->
        <section class="level-4th theory">
            <h4 class="title">原理：实现思路演变</h4>
            <div class="content">
              <ul class="list">
                <li>
                  <article class="level-5th">
                    <h5 class="title">宽度自适应，高度固定</h5>
                    <div class="content">
                      <div class="ratio ratio-40">
                        <img src="@/assets/images/img-holder-6.jpg">
                      </div>
                    </div>
                    <section class="tip">
                      <h6 class="title">问题来了：</h6>
                      <ol class="list ordered-list">
                        <li>屏幕宽度过大，图像被压扁；</li>
                        <li>屏幕宽度过小，图像被拉伸；</li>
                        <li>既然设置了高度会有问题，不设置高度不就行了么？</li>
                      </ol>
                    </section>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">宽度自适应，不设置高度</h5>
                    <div class="content">
                      <div>
                        <img src="@/assets/images/img-holder-6.jpg">
                      </div>
                    </div>
                    <section class="tip">
                      <h6 class="title">问题来了：</h6>
                      <ol class="list ordered-list">
                        <li>同一个图文列表，图像的展示尺寸不一致，不美观；</li>
                        <li>怎样固定图像的高宽比？哪个属性在垂直方向和元素的宽度挂钩，并且能为我们所用？</li>
                      </ol>
                    </section>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">padding和absolute绝对定位</h5>
                    <div class="content">
                      <div class="ratio ratio-40">
                        <img src="@/assets/images/img-holder-6.jpg">
                      </div>
                    </div>
                    <section class="tip">
                      <h6 class="title">问题来了：</h6>
                      <ol class="list ordered-list">
                        <li>padding有一个可选的百分比取值；</li>
                        <li>这个百分比取值到底是以什么为基准呢？</li>
                        <li>标准规范给出的解释是refer to width of containing block（参考包含块的宽度）；</li>
                        <li>注意是width of containing block（包含块的宽度），而不仅仅是父元素的宽度，也可能是祖先元素的宽度；</li>
                        <li>还有一点需要清楚，absolute绝对定位元素的top||right||bottom||left等值的偏移的起始位置，参照absolute绝对定位元素的margin edge（外边距边缘），以及临近的具有relative定位的祖先元素的padding edge（内边距边缘），这也是不能使用margin来解决这个问题的原因；</li>
                        <li>有了padding和absolute绝对定位，接下来便有了解决方案；</li>
                        <li>祖先元素ratio相对定位position: relative;；</li>
                        <li>后代元素&lt;img&gt;或img（此处img为class name）绝对定位position: absolute;，宽、高均设置为100%；</li>
                        <li>使用祖先元素padding-top || padding-bottom强制撑开后代元素高度，并且这个高度是和宽度相关联的；</li>
                        <li>当然，最简单的结构是父元素和子元素；</li>
                        <li>接下来，只要自定义高宽比的比例值即可；</li>
                      </ol>
                    </section>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">设置高宽比</h5>
                    <div class="content">
                      <div class="ratio ratio-40">
                        <img src="@/assets/images/img-holder-6.jpg">
                      </div>
                    </div>
                    <section class="tip">
                      <h6 class="title">问题来了：</h6>
                      <ol class="list ordered-list">
                        <li>设置高宽比为高/宽=40%；</li>
                        <li>这样一来，高宽比的值就固定死了；</li>
                        <li>如果用户上传的图像和预设的高宽比相去甚远，图像就会变形；</li>
                      </ol>
                    </section>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">背景图像尺寸</h5>
                    <div class="content">
                      <div class="ratio ratio-40">
                        <span
                          class="img"
                          :style="{'background-image': 'url(' + require('@/assets/images/img-holder-6.jpg') + ')'}"></span>
                      </div>
                    </div>
                    <section class="tip">
                      <h6 class="title">问题来了：</h6>
                      <ol class="list ordered-list">
                        <li>background-size: cover;，把背景图像扩展至足够大，以使背景图像完全覆盖背景区域；</li>
                        <li>这样就解决了图像会变形的问题；</li>
                        <li>但是，如果屏幕过大图像就会模糊；</li>
                        <li>如果用的是&lt;img&gt;标签，可以使用srcset属性来解决；</li>
                        <li>如果用的是背景图像，可以使用media query（媒体查询）来解决；</li>
                        <li>关于图像模糊是另外一个可以话题了，这里不再赘述；</li>
                      </ol>
                    </section>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">依然不完美</h5>
                    <div class="content">
                      <div class="ratio ratio-40">
                        <span
                          class="img"
                          :style="{'background-image': 'url(' + require('@/assets/images/img-holder-7.jpg') + ')'}"></span>
                      </div>
                    </div>
                    <section class="tip">
                      <h6 class="title">问题来了：</h6>
                      <ol class="list ordered-list">
                        <li>IE8及以下浏览器不可用；</li>
                        <li>CSS要写在行内，不符合结构与表现分离的原则；</li>
                        <li>有些图像内容显示不来；</li>
                        <li>如果要精准的显示特定区域的图像内容，则需要引入图像智能识别系统；</li>
                        <li>没有完美解决方案；</li>
                        <li>有人说position定位可以实现，观其原理，不可行，只能近似模拟background-size: cover，但效果相差甚远，不再举例；</li>
                        <li>顺便提一句，如果指定了position: fixed || absolute;或float: left || right;，会触发block formatting context（块级格式化上下文），这将导致元素的display属性的值修改为block，而在视觉上的表现和display: inline-block;极为相似，此时指定display: block || inline-block;是多余的、无效的；</li>
                      </ol>
                    </section>
                  </article>
                </li>
                <li>
                  <article class="level-5th">
                    <h5 class="title">自定义高宽比</h5>
                    <div class="content">
                      <div class="ratio ratio-260">
                        <span
                          class="img"
                          :style="{'background-image': 'url(' + require('@/assets/images/img-holder-8.jpg') + ')'}"></span>
                      </div>
                      <ol class="list ordered-list">
                        <li>如果组件没有提供相近的高宽比，可以自定义；</li>
                        <li>自定义高宽比为高/宽=260%；</li>
                        <li>自定义高宽比之后，请将CSS移至组件所在位置，以免造成组件定义混乱；</li>
                        <li>目前App没有用到这样需求的地方，暂且存放在addition.css文件中；</li>
                      </ol>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
        </section>
        <!-- 原理 结束 -->
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Question5'
}
</script>
