/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "晚期肾癌治疗选择和模式探讨",
        "目录-肾细胞癌的靶向治疗概述",
        "序贯治疗是当今肾癌的标准治疗方案",
        "能够进入二、三线治疗的患者相对较少<sup>1</sup>",
        "目前被FDA批准的治疗晚期肾癌的7种靶向药物",
        "全球主要肾癌指南对晚期肾癌治疗的推荐",
        "目录-肾细胞癌的一线靶向治疗",
        "调研-如果以下药物均可获得，您最认可的晚期肾癌一线靶向药物是？",
        "调研-如果以下药物均可获得，您最认可的晚期肾癌一线靶向药物是？",
        "III期临床研究：一线舒尼替尼对比IFN-α",
        "一线舒尼替尼对比IFN-α的III期研究： PFS和安全性",
        "VEG105192研究：一线培唑帕尼对比安慰剂的III期研究",
        "VEG105192研究: 总人群中的PFS<sup>1</sup>",
        "培唑帕尼：既往未经治疗患者的PFS和安全性",
        "AGILE 1051研究：阿昔替尼与索拉非尼一线头对头治疗mRCC的III期研究<sup>1</sup>",
        "AGILE 1051研究未达到主要研究终点",
        "一线治疗疗效和安全性数据汇总",
        "COMPARZ研究：培唑帕尼与舒尼替尼一线头对头的III期研究",
        "COMPARZ研究:培唑帕尼的PFS不劣于舒尼替尼",
        "COMPARZ研究：培唑帕尼的OS不劣于舒尼替尼，但ORR优于舒尼替尼",
        "COMPARZ研究：AE的相对风险对培唑帕尼有利<sup>1</sup>",
        "目录-肾细胞癌的二线靶向治疗 ",
        "AXIS研究：阿昔替尼与索拉非尼二线头对头的III期研究",
        "AXIS研究：阿昔替尼的二线PFS优于索拉非尼",
        "SWITCH研究: 索拉非尼-舒尼替尼vs.舒尼替尼-索拉非尼用于mRCC<sup>1</sup>",
        "SWITCH II研究:索拉非尼–培唑帕尼与培唑帕尼–索拉非尼比较的有效性和安全性<sup>1</sup> ",
        "mTOR通路与RCC息息相关：mTOR通过HIF-1α的产生促进血管生成，mTOR通路畸变也加剧肿瘤进展<sup>1</sup>",
        "RECORD-4研究：依维莫司的纯二线研究",
        "RECORD-4研究：总体人群和各亚组的中位PFS",
        "依维莫司与阿昔替尼二线中位PFS在全球人群数据的间接比较",
        "RECORD-4研究亚洲亚组",
        "依维莫司与阿昔替尼二线中位PFS在亚洲人群数据的间接比较",
        "EAU2014报道：比较mRCC序贯治疗OS的荟萃分析",
        "目录-肾细胞癌的三线靶向治疗 ",
        "靶向mTORC1的可能耐药机制：mTOR抑制剂耐药后继续抑制血管生成是有效的",
        "GOLD研究:VEGF-TKI和mTOR抑制剂治疗后多维替尼与索拉非尼的比较<sup>1</sup>",
        "TMT序贯治疗模式数据汇总 ",
        "中国研究的主要研究终点： TMT模式的中位PFS优于TTM模式",
        "调研-您最认可的晚期肾癌全程靶向治疗模式是？",
        "调研-您最认可的晚期肾癌全程靶向治疗模式是？",
        "总 结"];

    var imageArray = ["SNAG-0001.png","SNAG-0002.png","SNAG-0003.png","SNAG-0004.png","SNAG-0005.png","SNAG-0006.png",
        "SNAG-0007.png","SNAG-0008.png","SNAG-0009.png","SNAG-0010.png","SNAG-0011.png","SNAG-0012.png","SNAG-0013.png",
        "SNAG-0014.png","SNAG-0015.png","SNAG-0016.png","SNAG-0017.png","SNAG-0018.png","SNAG-0019.png","SNAG-0020.png",
        "SNAG-0021.png","SNAG-0022.png","SNAG-0023.png","SNAG-0024.png","SNAG-0025.png","SNAG-0026.png","SNAG-0027.png",
        "SNAG-0028.png","SNAG-0029.png","SNAG-0030.png","SNAG-0031.png","SNAG-0032.png","SNAG-0033.png","SNAG-0034.png",
        "SNAG-0035.png","SNAG-0036.png","SNAG-0037.png","SNAG-0038.png","SNAG-0039.png","SNAG-0040.png","SNAG-0041.png"];

    var timeArray = [0,15,25,70,120,166,226,240,290,325,376,420,452,486,532,570,614,702,742,773,793,835,860,892,932,
        1023,1056,1103,1148,1184,1275,1299,1365,1425,1445,1544,1590,1679,1696,1745,1763];
    var showTimeArray = ["0:00","0:15","0:25","1:10","2:00","2:45","3:46","4:00","4:50","5:25","6:18","7:00","7:32","8:06",
        "8:52","9:30","10:14","11:42","12:22","12:53","13:13","13:55","14:20","14:52","15:32","17:03","17:36","18:23",
        "19:08","19:44","21:15","21:39","22:45","23:45","24:05","25:44","26:30","27:59","28:16","29:05","29:23"];

    var sections = new Array();
    for(var i = 0; i < titleArray.length; i ++){
        var section = new Object();
        section.time = timeArray[i];
        section.title = titleArray[i];
        section.image = imageArray[i];
        section.showTime = showTimeArray[i];
        sections.push(section);
        section = null;
    }
    return sections;
};