// 工作台数据源 —— 各流水线每天/每次同步后覆盖写此文件，前端自动读取
window.WORKBENCH_DATA = {
  updatedAt: "2026-07-09 15:30",

  // ===== 每日复盘 =====
  reviewByDate: {
    "2026-07-09": {
      symbol: "IM2607",
      netPnl: 3200, trades: 4, winRate: 0.75, profitFactor: 2.1, expectancy: 800, maxDrawdown: -1500,
      points: [
        { t:1, side:"买", price:5820, correct:true,  setup:"H2" },
        { t:1, side:"卖", price:5910, correct:true,  setup:"止盈" },
        { t:2, side:"买", price:5880, correct:true,  setup:"H2" },
        { t:2, side:"卖", price:5950, correct:true,  setup:"止盈" },
        { t:3, side:"买", price:5930, correct:true,  setup:"Spike&Channel" },
        { t:3, side:"卖", price:5975, correct:true,  setup:"止盈" },
        { t:4, side:"卖", price:5990, correct:false, setup:"逆势MTR" },
        { t:4, side:"买", price:6010, correct:false, setup:"止损" }
      ],
      setups: [
        { name:"H2 顺势多头", count:2, pnl:2600, note:"牛市回调二次进场，标准" },
        { name:"Spike & Channel", count:1, pnl:900, note:"开盘冲高后通道，持有到位" },
        { name:"逆势 MTR 抢反转", count:1, pnl:-300, note:"违纪：趋势未破坏就抢反转" }
      ],
      diagnosis: [
        { tag:"逆势入场", hit:true,  detail:"第4笔在强趋势中抢反转，亏损" },
        { tag:"低周期提前离场", hit:false, detail:"本日持仓耐心达标" },
        { tag:"override 系统信号", hit:false, detail:"无" }
      ],
      summary:"顺势执行良好，H2 是今日主要盈利来源。唯一亏损来自逆势抢 MTR，属交易备忘明确警惕的行为。明日重点：趋势日里不碰反转。"
    }
  },
  defaultReviewDate: "2026-07-09",

  // ===== 月度复盘 =====
  monthlyByMonth: {
    "2026-07": {
      tradingDays:8, totalTrades:31, netPnl:14200, winRate:0.68, profitFactor:1.9, maxDD:-4200,
      bySetup: [
        { name:"H2 / L2 顺势", trades:14, winRate:0.79, pnl:11800 },
        { name:"Spike & Channel", trades:6, winRate:0.83, pnl:5200 },
        { name:"逆势 MTR", trades:5, winRate:0.20, pnl:-3800 },
        { name:"区间边界", trades:6, winRate:0.50, pnl:1000 }
      ],
      insight:"本月盈利集中在顺势 H2/L2 与 Spike&Channel；逆势 MTR 5 笔 4 亏，是主要拖累。建议下月停做逆势反转。"
    }
  },
  defaultMonth: "2026-07",

  // ===== AI 热点追踪 =====
  ai: [
    { name:"示例项目 A", url:"https://github.com/", demand:"解决什么问题（占位）", supply:"用什么技术（占位）", value:4, difficulty:"一键装", install:"pip install xxx" },
    { name:"示例项目 B", url:"https://github.com/", demand:"解决什么问题（占位）", supply:"用什么技术（占位）", value:3, difficulty:"需配置", install:"见步骤清单" }
  ],

  // ===== 选题库（每分类≥20，每周新增20/分类）=====
  topicCats: ["哲学","心理学","历史","人物传记","佛学","道家"],
  topics: [
    // —— 哲学 ——
    { title:"斯多葛：如何面对无法控制的事", cat:"哲学" },
    { title:"尼采：痛苦如何成就自我超越", cat:"哲学" },
    { title:"存在主义：自由与选择的重量", cat:"哲学" },
    { title:"苏格拉底：未经省察的人生不值得过", cat:"哲学" },
    { title:"柏拉图洞穴：我们看到的是真实吗", cat:"哲学" },
    { title:"康德：什么才是真正的自律", cat:"哲学" },
    { title:"叔本华：欲望与痛苦的钟摆", cat:"哲学" },
    { title:"加缪：荒诞中如何活得清醒", cat:"哲学" },
    { title:"亚里士多德：幸福是一种习惯", cat:"哲学" },
    { title:"怀疑主义：确定性是幻觉吗", cat:"哲学" },
    { title:"伊壁鸠鲁：快乐的真正来源", cat:"哲学" },
    { title:"黑格尔：正反合的思维方式", cat:"哲学" },
    { title:"维特根斯坦：语言的边界即世界的边界", cat:"哲学" },
    { title:"休谟：因果只是一种习惯", cat:"哲学" },
    { title:"帕斯卡赌注：信仰的理性", cat:"哲学" },
    { title:"奥卡姆剃刀：简单即真理", cat:"哲学" },
    { title:"决定论 vs 自由意志", cat:"哲学" },
    { title:"道德运气：好人为何遭厄运", cat:"哲学" },
    { title:"知识的三种来源", cat:"哲学" },
    { title:"哲学如何帮你做交易决策", cat:"哲学" },
    // —— 心理学 ——
    { title:"损失厌恶：亏损为何比盈利更痛", cat:"心理学" },
    { title:"心流：进入深度专注的条件", cat:"心理学" },
    { title:"确认偏误：我们只看想看的", cat:"心理学" },
    { title:"达克效应：无知者的自信", cat:"心理学" },
    { title:"锚定效应：第一印象如何操控你", cat:"心理学" },
    { title:"延迟满足：棉花糖实验的真相", cat:"心理学" },
    { title:"认知失调：改变信念的心理机制", cat:"心理学" },
    { title:"幸存者偏差：看不见的失败者", cat:"心理学" },
    { title:"沉没成本：为何我们死扛亏损", cat:"心理学" },
    { title:"情绪ABC：想法决定感受", cat:"心理学" },
    { title:"习惯回路：暗示-行为-奖励", cat:"心理学" },
    { title:"群体极化：观点为何越来越极端", cat:"心理学" },
    { title:"自我实现的预言", cat:"心理学" },
    { title:"心理账户：钱的非理性分类", cat:"心理学" },
    { title:"峰终定律：记忆如何欺骗你", cat:"心理学" },
    { title:"决策疲劳：意志力会耗尽", cat:"心理学" },
    { title:"光环效应与首因效应", cat:"心理学" },
    { title:"焦虑的进化根源", cat:"心理学" },
    { title:"交易中的过度自信偏差", cat:"心理学" },
    { title:"如何用心理学戒掉冲动交易", cat:"心理学" },
    // —— 历史 ——
    { title:"大萧条：泡沫如何破灭", cat:"历史" },
    { title:"郁金香狂热：人类第一次金融泡沫", cat:"历史" },
    { title:"罗马帝国为何衰落", cat:"历史" },
    { title:"一战如何被一颗子弹引爆", cat:"历史" },
    { title:"工业革命改变了什么", cat:"历史" },
    { title:"黑死病与欧洲的重生", cat:"历史" },
    { title:"大航海时代的资本逻辑", cat:"历史" },
    { title:"冷战：没有硝烟的博弈", cat:"历史" },
    { title:"布雷顿森林体系的兴衰", cat:"历史" },
    { title:"1929与2008的惊人相似", cat:"历史" },
    { title:"荷兰东印度公司：第一家跨国巨头", cat:"历史" },
    { title:"石油如何塑造现代世界", cat:"历史" },
    { title:"日本失去的三十年", cat:"历史" },
    { title:"苏联解体的经济根源", cat:"历史" },
    { title:"白银与明清帝国的命运", cat:"历史" },
    { title:"美元霸权是如何建立的", cat:"历史" },
    { title:"南海泡沫事件始末", cat:"历史" },
    { title:"魏玛德国的恶性通胀", cat:"历史" },
    { title:"丝绸之路上的贸易文明", cat:"历史" },
    { title:"历史上的债务危机与轮回", cat:"历史" },
    // —— 人物传记 ——
    { title:"利弗莫尔：投机之王的一生", cat:"人物传记" },
    { title:"芒格：多元思维模型", cat:"人物传记" },
    { title:"巴菲特：复利与耐心", cat:"人物传记" },
    { title:"索罗斯：反身性理论", cat:"人物传记" },
    { title:"西蒙斯：数学家如何征服华尔街", cat:"人物传记" },
    { title:"达利欧：原则与债务周期", cat:"人物传记" },
    { title:"凯恩斯：经济学家也是投机者", cat:"人物传记" },
    { title:"马斯克与第一性原理", cat:"人物传记" },
    { title:"乔布斯：专注与取舍", cat:"人物传记" },
    { title:"稻盛和夫：敬天爱人", cat:"人物传记" },
    { title:"曾国藩：笨功夫的力量", cat:"人物传记" },
    { title:"王阳明：知行合一", cat:"人物传记" },
    { title:"冯·诺依曼：天才的思维", cat:"人物传记" },
    { title:"费曼：好奇心驱动的一生", cat:"人物传记" },
    { title:"富兰克林：自我塑造", cat:"人物传记" },
    { title:"洛克菲勒：垄断与慈善", cat:"人物传记" },
    { title:"摩根：一个人的中央银行", cat:"人物传记" },
    { title:"格雷厄姆：价值投资之父", cat:"人物传记" },
    { title:"塔勒布：反脆弱的人生", cat:"人物传记" },
    { title:"丘吉尔：至暗时刻的领导力", cat:"人物传记" },
    // —— 佛学 ——
    { title:"金刚经：无住生心", cat:"佛学" },
    { title:"四圣谛：苦的根源与出路", cat:"佛学" },
    { title:"无常：唯一不变的是变化", cat:"佛学" },
    { title:"缘起性空：一切皆有条件", cat:"佛学" },
    { title:"正念：活在当下的力量", cat:"佛学" },
    { title:"放下执念：得失心的解药", cat:"佛学" },
    { title:"中道：不偏不倚的智慧", cat:"佛学" },
    { title:"因果业力的真正含义", cat:"佛学" },
    { title:"慈悲：从我执到无我", cat:"佛学" },
    { title:"禅宗公案：不立文字", cat:"佛学" },
    { title:"六度：从布施到智慧", cat:"佛学" },
    { title:"五蕴皆空", cat:"佛学" },
    { title:"心经：照见五蕴皆空", cat:"佛学" },
    { title:"贪嗔痴：三毒的现代解读", cat:"佛学" },
    { title:"空性与量子世界的呼应", cat:"佛学" },
    { title:"顿悟与渐修", cat:"佛学" },
    { title:"出离心：真正的自由", cat:"佛学" },
    { title:"平常心是道", cat:"佛学" },
    { title:"佛学中的情绪管理", cat:"佛学" },
    { title:"交易中的无我与纪律", cat:"佛学" },
    // —— 道家 ——
    { title:"道德经：反者道之动", cat:"道家" },
    { title:"上善若水：柔的力量", cat:"道家" },
    { title:"无为而治的现代应用", cat:"道家" },
    { title:"知足不辱，知止不殆", cat:"道家" },
    { title:"祸兮福所倚", cat:"道家" },
    { title:"大巧若拙", cat:"道家" },
    { title:"庄子：逍遥游的自由", cat:"道家" },
    { title:"齐物论：万物平等", cat:"道家" },
    { title:"庖丁解牛：顺势而为", cat:"道家" },
    { title:"虚静：内心的定力", cat:"道家" },
    { title:"阴阳：对立中的统一", cat:"道家" },
    { title:"道法自然", cat:"道家" },
    { title:"少则得，多则惑", cat:"道家" },
    { title:"曲则全，枉则直", cat:"道家" },
    { title:"治大国若烹小鲜", cat:"道家" },
    { title:"见素抱朴", cat:"道家" },
    { title:"天下莫柔弱于水", cat:"道家" },
    { title:"功成身退", cat:"道家" },
    { title:"道家与交易中的顺势思维", cat:"道家" },
    { title:"无用之用，方为大用", cat:"道家" }
  ],

  // ===== 视频工作流：示例已完成项目 =====
  demoProject: {
    title:"什么是价格行为中的 H2 进场",
    cat:"价格行为", orientation:"横版 16:9",
    stages:{ script:"done", video:"done", voice:"done", music:"done" },
    file:""  // 成品文件路径，生成后填入
  },

  // ===== 发布记录 =====
  publish: {
    posts: [
      { title:"H2 进场到底怎么用", likes:1820, comments:96, shares:210, time:"20:00", topic:"价格行为", verdict:"好" },
      { title:"我如何用 AI 做交易复盘", likes:3400, comments:180, shares:540, time:"21:30", topic:"AI+交易", verdict:"爆" },
      { title:"止损的三种结构", likes:640, comments:22, shares:40, time:"12:00", topic:"风控", verdict:"差" }
    ],
    bestTopic:"AI+交易（互动率最高）", worstTopic:"纯风控理论（转发极低）",
    bestTime:"21:00-22:00", worstTime:"午间 12:00 前后"
  },

  // ===== 邮箱合集 =====
  mail: {
    accounts: ["Gmail","QQ邮箱","阿里邮箱"],
    watchlist: ["Anthropic","OpenAI","聚宽","券商研究所"],
    items: [
      { from:"Anthropic", subject:"Claude 新模型发布通知", account:"Gmail", time:"08:12" },
      { from:"聚宽 JoinQuant", subject:"本周量化策略周报", account:"QQ邮箱", time:"昨天 21:40" },
      { from:"券商研究所", subject:"A股每日复盘与明日展望", account:"阿里邮箱", time:"今天 07:30" }
    ]
  }
};
