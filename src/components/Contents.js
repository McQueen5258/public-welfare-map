import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Typography } from '@material-ui/core';
import {
  TitleImage,
  Title,
  Text,
  Video,
  Image,
  DefaultParagraph
} from './article';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

// --------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    // width: "100%",
    border: '1px solid #eaeaea',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vision: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down(600)]: {
      fontSize: '16px'
    }
  },
  divider: { marginTop: theme.spacing(1), width: '40%' },
  article: { marginTop: theme.spacing(3) },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up(600)]: {
      width: '70%'
    }
  },
  // title: { width: "75%" },
  titleImg: {
    width: '100%'
  },
  paragraphs: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
  }
  // paragraph: {
  //   width: "70%",
  //   alignSelf: "center",
  // },
}));

// ---------------------------------------------------------------

function Item({ object, index, files }) {
  const { type, img, alt, content, isLink, title, video, videoBgImg } = object;
  if (type == 'titlePicture') {
    return (
      <TitleImage
        key={index}
        img={img}
        alt={alt}
        files={files}
        isLink={isLink}
      />
    );
  } else if (type == 'title') {
    return <Title key={index} content={content} />;
  } else if (type == 'text') {
    return <Text key={index} content={content} />;
  } else if (type == 'video') {
    return (
      <Video
        key={index}
        title={title}
        video={video}
        alt={alt}
        isLink={isLink}
        videoBgImg={videoBgImg}
      />
    );
  } else if (type == 'img') {
    return (
      <Image key={index} img={img} alt={alt} files={files} isLink={isLink} />
    );
  } else if (type == 'pTitle') {
    return (
      <Typography key={index} paragraph variant="h3">
        {content}
      </Typography>
    );
  } else {
    return <div key={index}>New type</div>;
  }
}

function Content({ attributes, id, files }) {
  const classes = useStyles();
  const { article, vision } = attributes;
  const ARTICLE = [
    {
      "type": "titlePicture",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/1707864092DA9E07131933D07181F18188C1F37B_size107_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "title",
      "content": "不参加高考，也不躺平，一群差生在这里找到新的活法"
    },
    {
      "type": "text",
      "content":
        "这些辍学的农村孩子，早早被打上“失败者”的标签。他们大部分人会重复父辈的老路，成为新的农二代或打工二代。实务学堂为他们提供了另外一种可能。"
    },
    {
      "type": "text",
      "content":
        "实务学堂是一个体制外的教育实验，办学3年，搬家5次，自嘲“流浪学校”。但它像一颗野草，多次移植后依旧生机勃勃。"
    },
    {
      "type": "video",
      "isLink": true,
      "title": "纪录短片《独木桥之外》完整版",
      "video":
        "https://ips.ifeng.com/video19.ifeng.com/video09/2021/06/02/p6805678204381045620-102-8-103626.mp4?reqtype=tsl&vid=26a48ba5-d406-47df-a919-9b2df3da4900&uid=XboXNV&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=&cat=&ptype=&platform=pc&sourceType=h5&dt=1642412108921&gid=m-9bwX5nY_x5&sign=de931609f9dddb06ace930d827484794&tm=1642412108921",
      "alt": "本期的纪录短片（片长30'11''）是摄影师跟拍近半年有余记录下的学堂日常。但这其中“没有点石成金的魔术”，没有曲折励志的故事。成长本身缓慢而细微。从这些日常纪实中，我们或许可以窥见这群“普通”孩子在主流教育之外的努力成长。",
      "videoBgImg":
        "https://x0.ifengimg.com/ucms/2021_23/5FAD2A3CE1C0465C9D921EB2184875FB82E93FD5_size640_w1920_h1080.jpg"
    },
    {
      "type": "pTitle",
      "content":
        "流浪学校"
    },
    {
      "type": "text",
      "content":
        "对于任何一个学校来说，这样频繁的搬家都是难以想象的。"
    },
    {
      "type": "text",
      "content":
        "2018年3月，学堂的第一个场地在北京昌平北七家镇的一个小院子，因租金昂贵、场地功能不健全，不到一年就搬到了北六环外的马池口。2019年夏天，又因场地方运营困难，学堂不得不前往第3个场地。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/FFBFE8E0514DCFF6EDCFC9721C0894846B165F83_size67_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "这次搬家，正值暑期，学生们听闻后主动过来帮忙，成了搬家主力。学堂的桌椅柜子、书籍资料，宿舍的生活用品，正被学生们以自创的方式一点一点被搬出：轻的物件从窗户上吊下来，重的箱子从楼道上铺设的临时滑道滑下……"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/F8F0EA8830C2445D4D67C5484E591B20DB58E420_size100_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "最后，物品装满了整整三辆箱货。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/5986619E6264D46E5D7CAD8A7E33F1051FEE250B_size107_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/C2DAF9CC8AF342FE035B738E2744B6A5FAE8EDCE_size80_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/782ED81A6ECB0A44953BCE0243DD64FBE1E5F7EF_size61_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/7CA40F279A2C4C10255A1D4EC1CE5080699AC7AB_size66_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "新的场地由学堂一位校董接济：体育场与一所私立学校共用，连同闲置一侧的二层建筑，构成了学堂新的日常空间。"
    },
    {
      "type": "text",
      "content":
        "宿舍的大部分铁架床也是其他公益机构捐的。实务学堂的生活老师露酱带着学生们拿着铁锤乒乓作响地组装铁架床——有的铁床螺丝与螺丝洞不吻合。他们要赶在9月9日开学前，将铁架床除锈、刷漆、组装好。"
    },
    {
      "type": "text",
      "content":
        "除了布置基础的起居物件，小楼常年没人住，有很多地方需要修缮。学堂学生的父亲罗扩见赶过来帮忙，他是位熟练的水电装修工，在北京工作了10多年。宿舍头顶的灯泡和几块悬落的天花板，他刚帮忙给换上。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/E0A0CE9F9273977E2EC2757F393FF296D807A91D_size136_w1080_h1620.jpg",
      "alt": "夏天，学堂的蚊虫多，欧阳烧了几把艾草熏学生宿舍，想试试能不能赶走蚊虫。"
    },
    {
      "type": "pTitle",
      "content":
        "从普通到普通"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/CEDF67461AF511D118E6E9CB3277E22CECC02ED6_size83_w1080_h720.jpg",
      "alt": "开学典礼上，实务学堂创始人欧阳艳琴正在发言。"
    },
    {
      "type": "text",
      "content":
        "在当下主流的教育系统中，实务学堂是一个特殊的存在。曾在媒体做过5年调查记者的欧阳艳琴，于2018创办了这个教育公益项目，主要面向15-18岁的流动和留守青少年群体，招收没有办法继续升学，也未顺利进入职场的孩子。在高考独木桥，职业教育，以及工厂流水线之外，欧阳艳琴试图“探索低收入人群职业发展的新路径”。"
    },
    {
      "type": "text",
      "content":
        "在欧阳看来，自己来做这个事有天然的心理动因和共情，“我自己就是一个典型的农民工家庭的孩子，留守儿童。因为自己的成长背景，总会被农村孩子的教育问题所牵绊”。"
    },
    {
      "type": "text",
      "content":
        "在某次教育创新峰会上，她看到很多激动人心的教育创新案例，但它们大都发生在资源集中的大城市、好学校。她心里发问：农村处于资源弱势，在目前的教育体系下，农村孩子也处于劣势状态。在双重的约束下，“不去想创新的解决方案，几乎没有出路”。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/9037EA73C969D6FB3DB4D6F62177DBEBF5771A2A_size117_w1080_h720.jpg",
      "alt": "开学典礼上，实务学堂创始人欧阳艳琴正在发言。"
    },
    {
      "type": "text",
      "content":
        "“你的培养目标是什么？”是欧阳在办学之初遇到的最多的发问。"
    },
    {
      "type": "text",
      "content":
        "“我们是在探索一条低收入人群的职业发展新路径，培养珍贵的普通人”。“这不一定是主流的应试路径，也不是工具化的职业教育路径，而是一个全人的提升，能够在职业上实现他理想的路径。”"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/3F3377648AD19FC00A70A1ECB7D6CF6CE57C6DD0_size87_w1080_h720.jpg",
      "alt": "欧阳正在和新生的家长聊天。"
    },
    {
      "type": "text",
      "content":
        "选择实务学堂的孩子，大多有一个共同的特点：他们家里大都有位关注教育的亲戚，他可能原来也在农村，但通过教育改变了自己的命运，现在在城市里工作。当他们发现实务学堂的时候，就去跟有需要的老家亲戚介绍学堂。"
    },
    {
      "type": "text",
      "content":
        "“但要让家长把孩子送到一个没几个人的地方，没有所谓传统的校舍，没有学历，没有文凭……这种情况真的需要很有勇气。一些家长，尤其是最开始的家长，给了我们很多鼓励。”"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/77848A74AFED4D084124EF8AAB1D95B29A21251D_size81_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "“我觉得中国教育最大的问题是出口太单一，我们所有人都只有一条路，那就是去考试。这样一条路径决定了我们所有人的成败”。欧阳想重建一个评价体系，“跟原来的应试评价体系不一样的”。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/2D685130F41273F124CD8E755CDF718BDEBD0071_size102_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "学堂的课程分成三个板块：身心素质，职业素养，专业技能。心理课是进入学堂的第一门课，心理老师邓泊是学堂最早配备的老师，她有10年的青少年心理咨询经验。"
    },
    {
      "type": "text",
      "content":
        "心理课在学堂既是课，同时也承担了很大部分心理辅导工作。学堂大部分的孩子来自农村, 有过留守或者流动的经历，有的人经历了很多情感、生活、学习上的挫折，这些在他们成长过程中过载的挫折，“让他们千疮百孔”。在学堂，邓泊试图和学生一起重建自我、自信和安全感，在她看来，这是激发真正的动力去学习做事的基础。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/07808BB13F3853E9BDB09FF90B719A390F3E8813_size44_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "学堂教职人员由三位全职老师以及稳定的老师志愿者团队构成。以欧阳和校董们为交汇点，好的资源不断往学堂倾斜。志愿者老师中有大学教授、企业CEO或艺术家等等，他们因对学堂的认同，投入其中。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/F82AFCBFC1A352112F7120BED332726D6247AF1C_size44_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "编程课程是学堂开设的数十门课程之一，学生罗明扬是Java课的助教，正在协助老师授课。而当前，罗明扬已被广州的一个公司录用，岗位是程序员，成为实务学堂培养出来的第一位进入职场工作的学员。"
    },
    {
      "type": "text",
      "content":
        "也是在Java编程课中，欧阳遇到过自己的“至暗时刻”。"
    },
    {
      "type": "text",
      "content":
        "由于学生实际投入时间远远不够，大部分学生“三天打鱼两天晒网”，导致学习进度非常缓慢。有一天，从学堂到家一个多小时，沮丧的情绪将欧阳团团包围。回到家，欧阳一会儿躺在床上对着天花板哀嚎，一会儿怒吼，半夜，自己一个人在小区跑了5公里。"
    },
    {
      "type": "text",
      "content":
        "“这都是一群什么样的学生？值不值得付出这么多，教育这群学生？”欧阳问自己。"
    },
    {
      "type": "text",
      "content":
        "心理老师邓泊对欧阳说：“孩子们都进步了。每个人开花结果的时间不一样，有一些，要到三四十岁才开花呢，但这一段学习经历对他们依然是重要的，是会影响他们一辈子的。”"
    },
    {
      "type": "text",
      "content":
        "再回顾这段经历，欧阳认为最大的困难不是学生的基础薄弱，这是学堂客观面对的现实。“最大的挑战是我们的能力够不够。我们的认知，我们的行动，各方面的能力够不够？”"
    },
    {
      "type": "text",
      "content":
        "有段时间，深圳流水线厂妹成为纽约程序员的故事在网络引发关注，许多朋友将文章转发给欧阳，期待着学堂里的“奇迹”。欧阳说学堂里是普普通通的孩子，努力成为“珍贵的普通人”的故事。从普通到普通，故事里没有点石成金的魔术。"
    },
    {
      "type": "text",
      "content":
        "建校之初，欧阳用“囚徒困境”解释自己的理念：“大家都寻求自身利益最大化去争夺资源，掐到最后谁也没得到”。欧阳觉得教育某种程度上现在也是这种情况，大家都往一个口走，比如每个人都去上课外班，变得每个人都必须去上课外班。在单一的上升渠道，单一的评价和成功标准之下，大家去竞争。那时候“内卷”还未成为大众流行语。"
    },
    {
      "type": "text",
      "content":
        "站在当下的语境之中，实务学堂的尝试，似乎是在反内卷地逃离系统。但在过去几年的教育实践中，面对评价维度单一、不断内卷的社会现实，欧阳也自问，“我能接受我的学生以后只是做流水线打工仔、餐厅服务员吗？”"
    },
    {
      "type": "text",
      "content":
        "如果，我们的学生，和他们的父母一样，做装修、超市促销、外卖、保姆，没有实现阶层跃迁，我们的教育是失败的吗？"
    },
    {
      "type": "pTitle",
      "content":
        "艺璇和景怡"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/8C34435401AA4594E7B7C8ACA72DD60299469372_size98_w1080_h720.jpg",
      "alt": "王艺璇（右一），景怡（左一）。"
    },
    {
      "type": "text",
      "content":
        "王艺璇来自山西，18岁，高二辍学，2018年秋季来学堂。"
    },
    {
      "type": "text",
      "content":
        "在新学期，艺璇负责新生接待工作，她的电脑上有一份本学期同学名录，共30位新老同学。艺璇数了数，他们来自10余个不同省份，没有北京的。其中“有无打工经历”一栏，有7把勾选“有”。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/B7127459CE96902725FD54ED973550B8BF6F8DA6_size81_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "景怡来自湖南桂阳，14岁，是当年新入学的学生。初二辍学后，景怡有短暂的打工经历。"
    },
    {
      "type": "text",
      "content":
        "在学堂的一次写作课中，艺璇采访了景怡来学堂之前的故事。"
    },
    {
      "type": "text",
      "content":
        "景怡的小家庭在很长一段时间分落在三个地理空间：妈妈是小学老师，带着弟弟在县城生活；爸爸常年在深圳做巴士司机；直到7岁前，景怡都和外婆住在镇上。初一时，景怡的成绩还不错，有时能考600分。"
    },
    {
      "type": "text",
      "content":
        "初一下学期，景怡认识了一些“混混”朋友，慢慢开始跟着翘课、打架。初二还没有结束，景怡就辍学和朋友相约去广东打工。能接受她们这个年龄的工厂，工作环境差，待遇不好。后经熟人介绍，景怡去了东莞凤岗一家工厂。从早上7点50打卡，到晚上12点下班，她在厂里做了一个多月。结算工资时，对方说她是未成年，原先约定的13块时薪，最后只给她9块。"
    },
    {
      "type": "text",
      "content":
        "回到深圳后，景怡在爸爸身边待了10多天。这成为景怡“人生中和爸爸连续相处时间最长的一次”。"
    },
    {
      "type": "text",
      "content":
        "王艺璇家和景怡家相似。"
    },
    {
      "type": "text",
      "content":
        "艺璇妈妈在山西县城老家带妹妹，爸爸已在北京打了10来年工。"
    },
    {
      "type": "text",
      "content":
        "她想起自己初中，周围也总有一些所谓的“社会混混”，“约同学去打工，去抽烟喝酒，上网吧，不回家”。王艺璇冲破重重困难念到了高二，但“死活也学不进去了，一做题就想哭”，高考模底只有300来分。按艺璇的说法，她始终找不到学习的意义，而在学堂，她可以自主选择她想学的一些课程：逻辑思维课，写作课，艺术课，还可以参加乐队。她觉得这些课很好玩，“对自己认识这个世界，和沟通表达都有很大帮助”。来学堂的第一学期艺璇就读了10几本书，其中她念念不忘的有：《亲爱的安德烈》《送你一颗子弹》《民主的细节》《阿内特青少年心理学》《房思琪的初恋乐园》……"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/B43AB8CFD24B0917E3D871B8EF433372EC325C3E_size34_w1080_h720.jpg",
      "alt": "学堂学生正在换灯泡。"
    },
    {
      "type": "text",
      "content":
        "家人送艺璇刚来学堂的初衷，是让她到应试教育外喘口气，调整过后，再回去参加高考。王艺璇在学堂期间也曾独自复习高考书目。"
    },
    {
      "type": "text",
      "content":
        "2019年，距离高考4个月的时候，王艺璇中断了复习，最终裸考200多分。她决定不复读了，又回到了学堂。后来她成为学堂创校以来第一个走出学堂去实习的学生。"
    },
    {
      "type": "text",
      "content":
        "“我一直在探索，在做选择，在其中成长，试图知道自己想要什么，什么对我来说最重要的。”"
    },
    {
      "type": "pTitle",
      "content":
        "在项目中成长"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/16C929D714E555AB47461F1BBA775D934A345543_size134_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "2019年秋季学期，学堂承接了一个公益项目：给1000位小学生普及交通安全知识。项目由欧阳作为指导老师协助，同学们作为交通安全培训老师独立备课、对接完成项目。在这个项目中，有以下4个场景，让我印象尤为深刻。"
    },
    {
      "type": "text",
      "content":
        "在项目正式开展前，欧阳将一份合同交予学生们签字项目——有一部分执行费用将支付给每位小讲师。这是很多学堂学生人生第一次签合同，17岁的窦泽钊小心翼翼地对签合同表达着自己的疑惑：只要我签了这个东西，就觉得我是为钱而来的，就有不舒服的感觉。"
    },
    {
      "type": "text",
      "content":
        "“那你以后不去挣钱吗？”"
    },
    {
      "type": "text",
      "content":
        "“所以这就很矛盾，然后我就很难受。”"
    },
    {
      "type": "text",
      "content":
        "……"
    },
    {
      "type": "text",
      "content":
        "“这是你们的第一份合同，你们以后还得签很多合同。每个人都要有一个边界，这种合约的意识源自现代社会非常重要的契约精神，是现代性的一个很重要的方向。”走出教室门口前，欧阳又停下来，想起了什么似的对窦泽钊补充道。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/8A3323ED797A15232908391A527C3B1201EE89FA_size91_w1080_h720.jpg",
      "alt": "这是学堂学生第一次作为讲师站在讲台上，但在首次试讲课中，大家就遇到了不小的挑战。"
    },
    {
      "type": "text",
      "content":
        "泽钊和搭档永祥在学堂的第一次试讲，因投入时间少，对授课对象了解不足，试讲时就面临断片和怯场。欧阳说如果讲课效果不佳，后续就换别的同学去讲课。"
    },
    {
      "type": "text",
      "content":
        "当晚，泽钊和永祥熬到凌晨1点，重新备课。睡前泽钊特地叮嘱生活老师露酱，“如果明天7点我起不来，可以多推我两下吗？”"
    },
    {
      "type": "text",
      "content":
        "第二天一早，两人通过了最后一次试讲考核。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/439EB8131068440C1AFF96966B0ED951B8A39E5B_size137_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "还有一次，艺璇和炳南来到另一所小学，他们的工作是为学校领导介绍交通安全项目。"
    },
    {
      "type": "text",
      "content":
        "走出办公室后，炳南说，“一般出现在那种地方，都是因为我闯祸被拉进去的”，这是他人生第一次因为“这种情况”进学校领导办公室。"
    },
    {
      "type": "text",
      "content":
        "艺璇感叹，“要是能在（老家的）母校这么来一次，会爽上天”。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/4771F4C029326E06865FA33DB0B8948DEB552254_size64_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "text",
      "content":
        "最后一天的讲课结束，景怡在回学堂的路上就迫不及待给爸爸打电话分享喜悦。“今天真是太完美了，完美收官”。来学堂以后，父女俩日常的对话更多了。"
    },
    {
      "type": "pTitle",
      "content":
        "十年之约"
    },
    {
      "type": "text",
      "content":
        "2020年春季学期，由于疫情，学堂和很多学校一样在线上完成了大部分的课业。在2020年夏天，学堂迎来了第三次搬家，这一次，24位师生和学堂从北方搬到了广州帽峰山下的村子继续学习。"
    },
    {
      "type": "text",
      "content":
        "初到广州，他们“一无所有”，教具、图书、同学们的衣物被滞留在北京。但20个学生几乎全都跟来了。学生、老师们调侃，“每一个学期我们都是在不同的地方开学。”"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/A89F2BE84E597DDBBFC40030E0284BFFF908BB01_size57_w1080_h720.jpg",
      "alt": "在新的教室，课程仍在继续。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/CFECE8DAF3226950487E6B2EF8F76BBC6695566C_size101_w1080_h720.jpg",
      "alt": "2021年的学堂年会，受疫情影响，只有少数嘉宾到场，有200多位嘉宾和家长在直播中参与。"
    },
    {
      "type": "text",
      "content":
        "“我们学堂搬了那么多次家，可能对于有一些学校是没法想象的”。欧阳问大家，你觉得对学堂而言，什么东西是最核心的，“只要我们还在一起，我们这个学堂就还存在”。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/28C219A0A085E79275FD5F21352389DC0FBDD0D5_size108_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/6F58DDD99B36FB3707799D1E3D0EB29E063C60DD_size81_w1080_h720.jpg",
      "alt": "在学堂年会的颁奖现场，周光明拿到了“苏格拉底奖”，罗家祥拿到了“心地善良奖”……阅读老师张鑫带领同学们自编自导自演了原创戏剧作品《瑟克塞斯男爵》。"
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/ABDF4B7E43D0B61ADFD6551B2BDAD2E40A8A85F0_size87_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/00AE9BE84C9B0916F95B0E7304FAA5CFBB834381_size113_w1080_h720.jpg",
      "alt": ""
    },
    {
      "type": "img",
      "isLink": true,
      "img": "https://x0.ifengimg.com/ucms/2021_23/768FF86C595F77AD25662B58A2438D10375D3E83_size51_w1080_h720.jpg",
      "alt": "实务学堂在帽峰山下的宿舍。"
    },
    {
      "type": "text",
      "content":
        "今年3月初，因帽峰山距离市区太远，志愿者往返不便等原因，学堂从帽峰山搬到了广州海珠区的小洲村。"
    },
    {
      "type": "text",
      "content":
        "这是学堂的第5次搬家。这一次，学堂的房租合同签了10年。"
    },
    {
      "type": "text",
      "content":
        "欧阳希望实务学堂能够长期运营下去，百年树人，学堂至少好好地先活十年，然后二十年……"
    },
    {
      "type": "text",
      "content":
        "对于那个阶层跃升的疑问，欧阳也给出了自己的答案：接受。"
    },
    {
      "type": "text",
      "content":
        "但我们希望，我们的学生，可以成为幸福的、有尊严的打工仔、服务员。"
    },
    {
      "type": "pTitle",
      "content":
        "拍摄后记 | 曹雕"
    },
    {
      "type": "text",
      "content":
        "在学堂拍摄期间，一位老师跟我分享，她说有时候真的很苦恼，不知道孩子们为什么不做作业，为什么没有课堂互动。想要和他们有更深入的内心交流，却怎么也“够不着”孩子们，有时候自己也会因此流泪。"
    },
    {
      "type": "text",
      "content":
        "那时我还不太能感同身受，直到今年我的侄子第二次面临中考。还没考试，他就已经确定自己可能将再次失败，没办法读大学了。他甚至做好了去一家理发店做洗头工的准备，说店主已经跟他说好，每月有一千五的工资。"
    },
    {
      "type": "text",
      "content":
        "我很想跟他说，不能上大学也不要否定自己未来的可能性，除了打工，我们还可以再找出路。可是也是“够不着”他。凭借几条微信消息，怎么可能让一个遭遇了自信受挫的孩子拾回信心。我也不太能跟他保证说，你不上大学，没有大学文凭，也可以活得很好。"
    },
    {
      "type": "text",
      "content":
        "拍完学堂后，我也成为了学堂的一员——作为学堂的摄影志愿者，每学期都带几位同学上摄影兴趣课。在课堂上，我听到的好消息是，有同学未来也愿意尝试摄影师的职业，还有的同学因为喜欢拍照，会用影像来表达自己的想法和情感。后来我就一下想清楚了摄影课的目标，越是普通人，我们就越要学习艺术科目（哪怕，不一定以此为业）。这个目标和学堂的使命是相似的，普通人，找到一个有尊严的活法。"
    },
    {
      "type": "text",
      "content":
        "很希望我的侄子能看到这篇文章，也很希望他能找到除了大学和打工之外的第三种可能。"
    },
  ];
console.log("article: " ,article[1]);
  return (
    <Box className={classes.content} id={id}>
      <Typography variant="h5" className={classes.vision}>
        “{vision}”
      </Typography>
      <Divider className={classes.divider} />
      <Box className={classes.article}>
        {article.map((item, index) => (
          <Item key={index} object={item} index={index} files={files} />
        ))}
        {article[1]?.content.length === 0 && <DefaultParagraph />}
      </Box>
    </Box>
  );
}

export default function Contents() {
  const classes = useStyles();
  const { publicWelfareData: data } = useSelector(
    (state) => state.publicWelfare
  );
  const { publicWelfareFiles: files } = useSelector((state) => state.files);

  return (
    <div className={classes.root}>
      {data?.map(({ attributes, id }) => {
        return (
          <Fragment key={'ID' + attributes.name + id}>
            <Content
              id={'ID' + attributes.name + id}
              attributes={attributes}
              files={files}
            />
            <Divider style={{ width: '100%' }} />
          </Fragment>
        );
      })}
    </div>
  );
}
