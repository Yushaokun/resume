/**********************************文档区*****************************************/
var text1=`/*
* 大家好，我是Yushaokun。
* 下面我来简单介绍一下我自己。
* 但是文字介绍过于单调。
* 今天，来点不一样的。
* 来做一个动态简历。
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* 这样太单调了，给代码来点颜色 */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 在加上动态阴影吧 */
#code{
  animation: glow 800ms ease-out infinite alternate;
}

/* 现在正式开始 */

/* 我需要一张白纸 */
#paper {
  position: fixed;
  right: 0;
  width: 48%;
  height: 100vh;
  padding: 16px;
  background: #ccc;
}
#paper>.content{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* 于是我就可以在白纸上写字了，请看右边 */

`;

var text2=`# 自我介绍

Yushaokun
----
基本信息：24岁，共青团员，本科院校中南大学，研究生院校北京航空航天大学，专业材料科学与工程  
性格：热情幽默，性格内向，同时又热爱编程  
个人宣言：BUG不改完不下班，编译不结束不睡觉 ໒(⊙ᴗ⊙)७✎▤  
<br/>

研究生教育经历 
----
时间：2017.09-2020.01          
主修课程：数理统计、无损检测、材料加工过程传输理论、工程材料数值模拟技术 等
主要课程成绩：
    无损检测：96
    航空航天材料工程实践讲堂：95
    数理统计：92
    英语：88
    工程材料数值模拟：86
    。。。。。。
校园经历：
    以复试专业排名第7、数学满分的成绩考入北京航空航天大学，跟随周铁涛教授进行等离子微弧熔覆技术的研究；
    研究生阶段自学过计算机编程（Java、Python），与同学建立学习互助小组，共同自学计算机本科基础课程；
    在校期间帮助医学博士生师兄建立云端医学数据库，为师兄的研究工作提供帮助。
    
本科教育经历 
----
时间：2013.09-2017.06
主修课程：高等数学、线性代数、大学物理、工程制图、C++程序设计、物理化学、材料科学基础 等
主要课程成绩：
    高等数学A（一）：92
    高等数学A（二）：98
    线性代数A：91
    工程力学：92
    大学物理B（一）：86
    大学物理B（二）：94
    电工学A：91
    。。。。。。
校园经历：
    大学生学术创新竞赛二等奖、数学建模竞赛三等奖、化学实验竞赛一等奖、中南大学材料学院奖学金；
    CET-4 551分，CET-6 481分，计算机二级（C语言）91分。

实习经历
----
1. 紫光集团 中青信用管理有限公司 2019.05-2019.07 数据开发实习生
2. 郑州市霓橙教育 2017.06-2017.08 高三化学辅导教师
3. 陕西宝钛集团有限公司 2016.07-2016.08 生产实习（实习生）

科研项目经历
----
1. 回归再时效对7020高强铝合金疲劳性能的影响
    时间：2017.01-2017.05
    工作内容：此项目研究RRA对7020铝合金疲劳性能的影响，通过调整时效工艺参数，改善7020铝合金的疲劳性能。
2. 熔覆工艺对锡青铜熔覆层组织性能的影响
    时间：2018.06-2019.12
    工作内容：使用CAE软件，模拟液态金属的初始凝固温度与凝固疏松空洞大小的关系，然后通过指定合理的参数，改善金属铸件的性能。
    
技能&证书
----
    - **编程语言**：Java、Python、HTML
    - **数据库**：MySQL、MongoDB、Postgresql
    - **开发工具**：Eclipse、IDEA、Pycharm、navigate、datagrip
    - **OS**：MacOS、Linux（Ubuntu、deepin）、Windows
    - **Others**：Git、Tomcat、Xmind
    - **书单**：《Python编程从入门到实践》、《Linux命令行》、《Java技术手册》、
                《剑指offer》、《深入理解计算机系统》、《Java编程思想》、《算法（第4版）》、
                《计算机网络自顶向下方法》、《MySQL数据库管理与开发》、《图解设计模式（日 结城浩）》
               
兴趣爱好
----
1. 喜爱慢跑，曾参加中南大学"百里毅行"活动，中南大学定向越野比赛；羽毛球（娱乐，非专业）；
2. 热爱世界文学名著及古代历史。
    阅读书籍包括当年明月《明朝那些事儿》系列、陈羡《南北朝》三部曲、
    司徒琳（美）《南明史》、黄仁宇《万历十五年》、《福尔摩斯探案集》、东野圭吾推理系列、川端康成全集等；
3. 热爱动植物学，对动植物有浓厚兴趣，B站关注过大量动植物学up主。


`;

var text3=`
/* 由于使用的是Mmarkdown格式 */
/* 需要转换为Html */

/*
* 接下来使用一个优秀的库
* 将我们的Mmarkdown转换为Html
*/

`;
var text4=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

/**********************************执行代码区*****************************************/
writeLeft(()=>{
  qx(()=>{
      createPaper(()=>{
      writeRight(()=>{
        mdHtml(()=>{
          md(()=>{
            end()
          })
        })
      })
    })
  })
})




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },10)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },10)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },10)
}



