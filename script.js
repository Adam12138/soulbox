// 六十四卦数据
const hexagrams = [
    { id: 1, name: "乾卦", sentence: "乐观是一种可以习得的技能，不是天赋，而是后天修炼的力量。", explanation: "乾为天，刚健中正。象征着天道运行，君子应当效法天道，自强不息。此卦主吉，事业顺利，运势亨通。" },
    { id: 2, name: "坤卦", sentence: "奇妙的悖论是，当我接受自己本来的样子时，我就能改变了。", explanation: "坤为地，柔顺包容。象征着地德载物，君子应当效法地德，厚德载物。此卦主吉，人际关系和谐，事业稳定发展。" },
    { id: 3, name: "屯卦", sentence: "不是看到希望才坚持，而是坚持了才看到希望。", explanation: "屯者，物之始生也。象征着事物初始阶段的艰难，需要积蓄力量，耐心等待时机。此卦主凶中有吉，虽有困难，但只要坚持就能度过。" },
    { id: 4, name: "蒙卦", sentence: "生命的最佳时刻发生在自愿的目标追求中。", explanation: "蒙者，蒙昧也。象征着启蒙教育，需要虚心学习，接受指导。此卦主吉，通过学习和指导能够获得进步和成长。" },
    { id: 5, name: "需卦", sentence: "你拥有的只有此刻，把注意力锚定在这里。", explanation: "需者，等待也。象征着等待时机，不要急躁，顺应自然。此卦主吉，耐心等待会有好的结果。" },
    { id: 6, name: "讼卦", sentence: "你看待事物的方式决定了一切，而不是事物本身如何。", explanation: "讼者，争讼也。象征着争端和诉讼，需要谨慎处理，避免冲突。此卦主凶，建议以和为贵，避免争执。" },
    { id: 7, name: "师卦", sentence: "爱意味着积极地关心另一个人的生活和成长。", explanation: "师者，军队也。象征着团队合作，需要严明纪律，团结一心。此卦主吉，事业需要团队协作才能成功。" },
    { id: 8, name: "比卦", sentence: "孤独并不是来自身边无人，而是无法与他人交流对其最要紧的感受。", explanation: "比者，亲近也。象征着人际关系，需要真诚相待，互相帮助。此卦主吉，人际关系和谐，事业顺利。" },
    { id: 9, name: "小畜卦", sentence: "你的弱点不重要，你的优势才定义你是谁。", explanation: "小畜者，小有所畜也。象征着小有积蓄，需要继续努力，不可骄傲。此卦主吉，事业有小成，前途光明。" },
    { id: 10, name: "履卦", sentence: "你是谁，取决于你的行动，而非你的言语。", explanation: "履者，履行也。象征着行动和实践，需要谨慎行事，遵守规则。此卦主吉，做事谨慎能够成功。" },
    { id: 11, name: "泰卦", sentence: "乐观者在每个危机里看到机会，悲观者在每个机会里看见危机。", explanation: "泰者，通也。象征着通达顺利，天地交泰，万物繁荣。此卦主吉，事业顺利，运势亨通。" },
    { id: 12, name: "否卦", sentence: "即使在最黑暗的时刻，我们也能找到光明，希望是唯一比恐惧更强大的东西。", explanation: "否者，不通也。象征着阻塞不顺，需要耐心等待，积蓄力量。此卦主凶，建议保守行事，等待时机。" },
    { id: 13, name: "同人卦", sentence: "我们是在与世界的碰撞中认识自己的，你的特质，善良、勇敢、幽默，这些都需要与人和事的互动中得以展现和确认。", explanation: "同人者，同于仁也。象征着志同道合，需要团结一心，共同奋斗。此卦主吉，团队合作能够成功。" },
    { id: 14, name: "大有卦", sentence: "做你擅长的事，世界会回报你。", explanation: "大有者，大有所获也。象征着收获丰盛，需要谦虚谨慎，不可骄傲。此卦主吉，事业有成，财富丰厚。" },
    { id: 15, name: "谦卦", sentence: "真正的强大，是允许自己脆弱。", explanation: "谦者，谦逊也。象征着谦虚谨慎，不骄不躁。此卦主吉，谦虚使人进步，事业顺利。" },
    { id: 16, name: "豫卦", sentence: "每天做一件让自己开心的事，这是对生活最温柔的反抗。", explanation: "豫者，愉悦也。象征着快乐和满足，需要保持适度，不可过度享乐。此卦主吉，心情愉快，事业顺利。" },
    { id: 17, name: "随卦", sentence: "活在当下，不是忽视未来，而是让未来从当下的选择中自然展开。", explanation: "随者，随从也。象征着顺应时势，跟随正确的方向。此卦主吉，顺应潮流能够成功。" },
    { id: 18, name: "蛊卦", sentence: "每一次跌倒，都是重新校准方向的机会。", explanation: "蛊者，蛊惑也。象征着问题和困惑，需要及时解决，不可拖延。此卦主凶，建议及时处理问题，避免恶化。" },
    { id: 19, name: "临卦", sentence: "改变你的思想，你就能改变你的世界。", explanation: "临者，临近也。象征着领导和管理，需要以身作则，关爱下属。此卦主吉，领导力强，事业顺利。" },
    { id: 20, name: "观卦", sentence: "往外看的人在做梦，向内审视的人才清醒。", explanation: "观者，观察也。象征着观察和思考，需要明察秋毫，深思熟虑。此卦主吉，善于观察能够做出正确的决策。" },
    { id: 21, name: "噬嗑卦", sentence: "行动是治愈恐惧的良药，犹豫、拖延会不断滋养恐惧。", explanation: "噬嗑者，咬合也。象征着解决问题，需要果断行动，清除障碍。此卦主吉，能够克服困难，解决问题。" },
    { id: 22, name: "贲卦", sentence: "生命不是等待暴风雨过去，而是学会在雨中跳舞。", explanation: "贲者，文饰也。象征着修饰和美化，需要适度装饰，不可过度。此卦主吉，适当的修饰能够提升形象和价值。" },
    { id: 23, name: "剥卦", sentence: "处于低谷时，四面都是上坡路。", explanation: "剥者，剥落也。象征着衰退和损失，需要谨慎行事，保存实力。此卦主凶，建议保守防御，避免损失。" },
    { id: 24, name: "复卦", sentence: "你抗拒的东西会持续存在，你正视的东西会逐渐转化。", explanation: "复者，回复也。象征着恢复和生机，需要积极行动，重新开始。此卦主吉，能够恢复活力，重新发展。" },
    { id: 25, name: "无妄卦", sentence: "我并非由过往经历塑造，而是由选择成为的样子决定。", explanation: "无妄者，无虚妄也。象征着真实和正直，需要脚踏实地，不可虚妄。此卦主吉，真诚做事能够成功。" },
    { id: 26, name: "大畜卦", sentence: "我们常常高估一次性改变的难度，低估每天微小改变的累积力量。", explanation: "大畜者，大有所畜也。象征着积蓄力量，需要不断努力，厚积薄发。此卦主吉，积蓄充足，事业有成。" },
    { id: 27, name: "颐卦", sentence: "知足是天然的财富，欲望是人为的贫穷。", explanation: "颐者，养也。象征着养生和培养，需要注重修养，培养品德。此卦主吉，注重修养能够获得福报。" },
    { id: 28, name: "大过卦", sentence: "你生命的前半辈子或许属于别人，活在别人的认为里。那把后半辈子还给你自己，去追随你内在的声音。", explanation: "大过者，太过也。象征着过度和极端，需要谨慎行事，避免过度。此卦主凶，建议中庸之道，避免极端。" },
    { id: 29, name: "坎卦", sentence: "韧性不是避免跌倒，而是每次跌倒都能站起来。", explanation: "坎者，陷也。象征着困难和危险，需要勇敢面对，克服困难。此卦主凶，虽有困难，但只要勇敢就能度过。" },
    { id: 30, name: "离卦", sentence: "人类存在的唯一目的，是在纯粹的自在的黑暗中点亮一盏灯。", explanation: "离者，丽也。象征着光明和美丽，需要保持光明磊落，追求美好。此卦主吉，光明正大，事业顺利。" },
    { id: 31, name: "咸卦", sentence: "爱是一种需要学习的能力，先成为完整的自己，才能与他人建立深刻的联结。", explanation: "咸者，感也。象征着感应和交流，需要真诚沟通，互相理解。此卦主吉，人际关系和谐，感情顺利。" },
    { id: 32, name: "恒卦", sentence: "微小的、持续的调整，比雄心勃勃的失败更有力量。", explanation: "恒者，久也。象征着持久和稳定，需要持之以恒，坚持不懈。此卦主吉，坚持努力能够成功。" },
    { id: 33, name: "遁卦", sentence: "真正的成熟，是在保持柔软的同时，建立起保护自己的边界。", explanation: "遁者，退也。象征着退避和隐居，需要审时度势，适时退让。此卦主凶中有吉，适时退让能够保全自己。" },
    { id: 34, name: "大壮卦", sentence: "真正的自由不是为所欲为，而是有所不为的意志力。", explanation: "大壮者，壮大也。象征着强大和壮大，需要保持谦虚，不可傲慢。此卦主吉，实力强大，事业顺利。" },
    { id: 35, name: "晋卦", sentence: "不必追着别人的光芒跑，找到自己的闪光点，你就是独一无二的光。", explanation: "晋者，进也。象征着前进和晋升，需要积极进取，不断努力。此卦主吉，事业有晋升机会，运势上升。" },
    { id: 36, name: "明夷卦", sentence: "即使在最黑暗的时刻，我们也能找到光明，希望是唯一比恐惧更强大的东西。", explanation: "明夷者，明伤也。象征着光明受到伤害，需要韬光养晦，等待时机。此卦主凶，建议低调行事，等待时机。" },
    { id: 37, name: "家人卦", sentence: "深厚的关系是幸福的最强预测因素。", explanation: "家人者，家也。象征着家庭和亲情，需要和睦相处，互相关爱。此卦主吉，家庭和谐，幸福美满。" },
    { id: 38, name: "睽卦", sentence: "最高级的共情，是理解他人为何无法理解你。", explanation: "睽者，乖离也。象征着分歧和矛盾，需要求同存异，化解矛盾。此卦主凶中有吉，能够化解分歧，达成共识。" },
    { id: 39, name: "蹇卦", sentence: "那些让你痛苦的、困惑的、焦虑的，其实都是潜意识在提醒你 —— 该向内看了。", explanation: "蹇者，难也。象征着艰难和困境，需要勇敢面对，寻求帮助。此卦主凶，虽有困难，但只要努力就能克服。" },
    { id: 40, name: "解卦", sentence: "疗愈不是回到受伤前的样子，而是带着伤疤活出新的可能。", explanation: "解者，解难也。象征着解决困难，需要抓住时机，果断行动。此卦主吉，能够解决困难，迎来转机。" },
    { id: 41, name: "损卦", sentence: "说 “不” 的能力，决定了你说 “是” 的价值。", explanation: "损者，减损也。象征着损失和减少，需要权衡利弊，适当取舍。此卦主凶中有吉，适当的损失能够换来更大的收获。" },
    { id: 42, name: "益卦", sentence: "失败不是 “我不行” 的证明，而是 “我还没练会” 的信号 —— 成长型思维，才是抗挫的底气。", explanation: "益者，增益也。象征着增益和收获，需要乐于助人，互相帮助。此卦主吉，助人为乐，事业顺利。" },
    { id: 43, name: "夬卦", sentence: "当你使用最强的优势应对最大的挑战时，就能体验到极致的满足感。", explanation: "夬者，决也。象征着决断和解决，需要果断决策，清除障碍。此卦主吉，果断决策能够成功。" },
    { id: 44, name: "姤卦", sentence: "生命的意义在于找到你的礼物，生命的目的是给予它。", explanation: "姤者，遇也。象征着相遇和机会，需要把握时机，积极进取。此卦主吉，遇到贵人，机会来临。" },
    { id: 45, name: "萃卦", sentence: "居安思危，思则有备，有备无患。", explanation: "萃者，聚也。象征着聚集和团结，需要团结一心，共同奋斗。此卦主吉，团结协作能够成功。" },
    { id: 46, name: "升卦", sentence: "我们常常高估一次性改变的难度，低估每天微小改变的累积力量。", explanation: "升者，上升也。象征着上升和发展，需要不断努力，循序渐进。此卦主吉，事业稳步上升，前途光明。" },
    { id: 47, name: "困卦", sentence: "意义不是被发现的，而是被创造的。", explanation: "困者，困厄也。象征着困境和挫折，需要坚韧不拔，寻求突破。此卦主凶，虽有困境，但只要坚持就能突破。" },
    { id: 48, name: "井卦", sentence: "每天都需要用乐观去拥抱生活", explanation: "井者，水井也。象征着滋养和奉献，需要保持正直，无私奉献。此卦主吉，品德高尚，事业顺利。" },
    { id: 49, name: "革卦", sentence: "生活的不确定性正是我们希望的来源。", explanation: "革者，变革也。象征着变革和创新，需要顺应时势，勇于创新。此卦主吉，改革创新能够成功。" },
    { id: 50, name: "鼎卦", sentence: "你生命的前半辈子或许属于别人，活在别人的认为里。那把后半辈子还给你自己，去追随你内在的声音。", explanation: "鼎者，鼎器也。象征着权威和稳定，需要稳重行事，保持权威。此卦主吉，地位稳固，事业顺利。" },
    { id: 51, name: "震卦", sentence: "你不是你的情绪，而是情绪的观察者。", explanation: "震者，雷也。象征着震动和警示，需要保持警惕，谨慎行事。此卦主凶中有吉，能够吸取教训，改过自新。" },
    { id: 52, name: "艮卦", sentence: "活在当下，不是忽视未来，而是让未来从当下的选择中自然展开。", explanation: "艮者，山也。象征着停止和稳重，需要适可而止，保持稳重。此卦主吉，稳重行事能够成功。" },
    { id: 53, name: "渐卦", sentence: "人生没有太晚的开始，只有从未开始的遗憾。", explanation: "渐者，渐进也。象征着渐进和发展，需要循序渐进，不可急躁。此卦主吉，稳步发展能够成功。" },
    { id: 54, name: "归妹卦", sentence: "健康的关系不是彼此缠绕，而是两棵并肩生长的树。", explanation: "归妹者，嫁妹也。象征着婚姻和家庭，需要真诚相待，互相尊重。此卦主吉，婚姻美满，家庭幸福。" },
    { id: 55, name: "丰卦", sentence: "即使是幸福的生活也不可能没有一些黑暗，如果没有悲伤的平衡，“幸福” 这个词就会失去意义。", explanation: "丰者，丰盛也。象征着丰盛和繁荣，需要保持谦虚，不可骄傲。此卦主吉，事业繁荣，财富丰厚。" },
    { id: 56, name: "旅卦", sentence: "孤独并不是来自身边无人，而是无法与他人交流对其最要紧的感受。", explanation: "旅者，旅行也。象征着旅行和漂泊，需要适应环境，随遇而安。此卦主凶中有吉，能够适应变化，有所收获。" },
    { id: 57, name: "巽卦", sentence: "当我们真正接受自己时，改变的力量会自然生长，就像种子遇见春天。", explanation: "巽者，风也。象征着柔顺和服从，需要谦虚谨慎，服从真理。此卦主吉，谦虚柔顺能够成功。" },
    { id: 58, name: "兑卦", sentence: "快乐不是偶然发生的，而是由你的选择决定的。", explanation: "兑者，悦也。象征着喜悦和快乐，需要保持乐观，与人为善。此卦主吉，心情愉快，人际关系和谐。" },
    { id: 59, name: "涣卦", sentence: "最深的痛苦往往源于抗拒本应经历的痛苦。", explanation: "涣者，涣散也。象征着涣散和分离，需要团结一心，凝聚力量。此卦主凶，建议加强团结，避免涣散。" },
    { id: 60, name: "节卦", sentence: "知足是天然的财富，欲望是人为的贫穷。", explanation: "节者，节制也。象征着节制和节约，需要适度节制，不可过度。此卦主吉，适度节制能够保持平衡和稳定。" },
    { id: 61, name: "中孚卦", sentence: "信任是关系的基石，而信任的基石是真诚。", explanation: "中孚者，诚信也。象征着诚信和信任，需要真诚相待，信守承诺。此卦主吉，诚信做事能够获得信任和成功。" },
    { id: 62, name: "小过卦", sentence: "每个 “必须” 背后，都藏着一个未被审视的恐惧。", explanation: "小过者，小有所过也。象征着小的过错，需要及时改正，不可忽视。此卦主凶中有吉，能够及时改正错误，避免大患。" },
    { id: 63, name: "既济卦", sentence: "最好的决策往往在 “足够好” 时做出，而非 “完美” 时。", explanation: "既济者，既成也。象征着成功和完成，需要保持警惕，不可懈怠。此卦主吉，事业成功，需要保持谨慎。" },
    { id: 64, name: "未济卦", sentence: "生命不是一场终点冲刺，而是一场持续的旅程，重要的是沿途的风景与成长。", explanation: "未济者，未成也。象征着未完成和继续努力，需要坚持不懈，继续奋斗。此卦主凶中有吉，只要继续努力就能成功。" }
];

// DOM元素
const drawPage = document.getElementById('draw-page');
const resultPage = document.getElementById('result-page');
const carousel = document.getElementById('carousel');
const drawBtn = document.getElementById('draw-btn');
const resetBtn = document.getElementById('reset-btn');
const hexagramName = document.getElementById('hexagram-name');
const hexagramExplanation = document.getElementById('hexagram-explanation');
const petalsContainer = document.getElementById('petals-container');

// 图片路径数组
const carouselImages = [
    'horse1.png',
    'horse2.png',
    'horse3.png',
    'horse4.png'
];

// 初始化旋转木马
function initCarousel() {
    const itemCount = 12; // 旋转木马上的项目数量
    const radius = 150; // 旋转木马半径，适当增大以容纳更大的图片
    
    for (let i = 0; i < itemCount; i++) {
        const angle = (i / itemCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // 后面的图片高出前面的图片100个像素
        // z值越小（后面），y值越小（越高）
        // 当z = -radius（最后面）时，y = -50（最高）
        // 当z = radius（最前面）时，y = 50（最低）
        const y = (100 * z) / (2 * radius);
        
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.style.position = 'absolute';
        item.style.left = `calc(50% - 45px)`; // 调整为新的大小
        item.style.top = `calc(50% - 45px)`; // 调整为新的大小
        item.style.width = '90px'; // 调大1.5倍
        item.style.height = '90px'; // 调大1.5倍
        item.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
        item.style.zIndex = Math.floor(z + radius); // 根据z轴位置设置层级
        item.style.transition = 'transform 0.05s ease-out'; // 设置平滑过渡
        
        // 创建图片元素
        const img = document.createElement('img');
        img.src = carouselImages[i % carouselImages.length];
        img.style.width = '75px !important'; // 调大1.5倍（50px * 1.5），添加!important提高优先级
        img.style.height = '75px !important'; // 调大1.5倍（50px * 1.5），添加!important提高优先级
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        
        item.appendChild(img);
        carousel.appendChild(item);
    }
}

// 重新抽签
function resetDraw() {
    drawBtn.disabled = false;
    carousel.style.transition = 'none';
    carousel.style.transform = 'rotateY(0deg)';
}

// 事件监听
drawBtn.addEventListener('click', () => {
    // 检查是否可以抽签（每60分钟一次）
    const lastDrawTime = localStorage.getItem('lastDrawTime');
    const currentTime = Date.now();
    const sixtyMinutes = 60 * 1000;
    
    if (lastDrawTime) {
        const timeDiff = currentTime - parseInt(lastDrawTime);
        if (timeDiff < sixtyMinutes) {
            // 计算剩余时间
            const remainingTime = sixtyMinutes - timeDiff;
            const minutes = Math.floor(remainingTime / (3 * 60 * 1000));
            const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
            
            // 显示倒计时弹窗
            const countdownModal = document.createElement('div');
            countdownModal.style.position = 'fixed';
            countdownModal.style.top = '0';
            countdownModal.style.left = '0';
            countdownModal.style.width = '100%';
            countdownModal.style.height = '100%';
            countdownModal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            countdownModal.style.display = 'flex';
            countdownModal.style.justifyContent = 'center';
            countdownModal.style.alignItems = 'center';
            countdownModal.style.zIndex = '1000';
            
            const countdownContent = document.createElement('div');
            countdownContent.style.backgroundColor = 'white';
            countdownContent.style.padding = '30px';
            countdownContent.style.borderRadius = '10px';
            countdownContent.style.textAlign = 'center';
            countdownContent.style.width = '80%';
            countdownContent.style.maxWidth = '500px';
            
            const countdownText = document.createElement('p');
            countdownText.style.fontSize = '18px';
            countdownText.style.lineHeight = '1.5';
            countdownText.style.marginBottom = '30px';
            
            const closeBtn = document.createElement('button');
            closeBtn.textContent = '关闭';
            closeBtn.style.padding = '10px 30px';
            closeBtn.style.fontSize = '16px';
            closeBtn.style.backgroundColor = '#B1BEF2';
            closeBtn.style.color = 'white';
            closeBtn.style.border = 'none';
            closeBtn.style.borderRadius = '5px';
            closeBtn.style.cursor = 'pointer';
            
            countdownContent.appendChild(countdownText);
            countdownContent.appendChild(closeBtn);
            countdownModal.appendChild(countdownContent);
            document.body.appendChild(countdownModal);
            
            // 更新倒计时
            const updateCountdown = () => {
                const currentTime = Date.now();
                const timeDiff = currentTime - parseInt(lastDrawTime);
                const remainingTime = sixtyMinutes - timeDiff;
                
                if (remainingTime <= 0) {
                    // 倒计时结束，允许抽签
                    clearInterval(timer);
                    document.body.removeChild(countdownModal);
                    // 自动触发抽签
                    drawBtn.click();
                    return;
                }
                
                const minutes = Math.floor(remainingTime / (60 * 1000));
                const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
                countdownText.textContent = `请稍后再试，距离下次抽签还有 ${minutes} 分 ${seconds} 秒`;
            };
            
            // 每秒更新一次倒计时
            const timer = setInterval(updateCountdown, 1000);
            
            // 初始化显示
            updateCountdown();
            
            closeBtn.addEventListener('click', () => {
                clearInterval(timer);
                document.body.removeChild(countdownModal);
            });
            
            return; // 阻止抽签
        }
    }
    
    // 记录本次抽签时间
    localStorage.setItem('lastDrawTime', currentTime.toString());
    
    // 开始旋转
    drawBtn.disabled = true;
    drawBtn.textContent = '抽签中...';

    // 获取所有图片元素
    const items = carousel.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    const radius = 150; // 统一使用与初始化相同的半径

    // 3秒转两圈，更流畅的动画
    const totalSteps = 96; // 增加步骤数量，使动画更流畅
    const totalRotation = 2; // 转两圈（4π）
    let currentStep = 0;
    const stepDuration = 3000 / totalSteps; // 总时间3秒，平均分配给每个步骤

    const interval = setInterval(() => {
        items.forEach((item, index) => {
            // 计算新位置，每个步骤移动一个小角度
            const progress = (currentStep / totalSteps) * totalRotation;
            const angle = ((index / itemCount) + progress) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (100 * z) / (2 * radius);
            
            // 只在必要时更新z-index，减少重排
            const newZIndex = Math.floor(z + radius);
            if (parseInt(item.style.zIndex) !== newZIndex) {
                item.style.zIndex = newZIndex;
            }
            
            // 使用transform，不重复设置transition（已在初始化时设置）
            item.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
        });

        currentStep++;
        if (currentStep >= totalSteps) {
            clearInterval(interval);
        }
    }, stepDuration);

    // 3秒后停止并跳转到结果页面
    setTimeout(() => {
        drawBtn.disabled = false;
        drawBtn.textContent = '开始抽签';

        // 随机抽取一卦
        const randomGua = hexagrams[Math.floor(Math.random() * hexagrams.length)];
        
        // 弹窗显示语句
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(177, 190, 242, 0.7)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '30px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.textAlign = 'center';
        modalContent.style.width = '80%';
        modalContent.style.maxWidth = '500px';
        
        const sentenceElement = document.createElement('p');
        sentenceElement.textContent = randomGua.sentence;
        sentenceElement.style.fontSize = '18px';
        sentenceElement.style.lineHeight = '1.5';
        sentenceElement.style.marginBottom = '30px';
        
        const forwardBtn = document.createElement('button');
        forwardBtn.textContent = '转发查看详细解读';
        forwardBtn.style.padding = '10px 30px';
        forwardBtn.style.fontSize = '16px';
        forwardBtn.style.backgroundColor = '#B1BEF2';
        forwardBtn.style.color = 'white';
        forwardBtn.style.border = 'none';
        forwardBtn.style.borderRadius = '5px';
        forwardBtn.style.cursor = 'pointer';
        
        forwardBtn.addEventListener('click', () => {
            // 跳转到结果页面，通过URL参数传递卦象信息
            const url = `result.html?name=${encodeURIComponent(randomGua.name)}&explanation=${encodeURIComponent(randomGua.explanation)}&sentence=${encodeURIComponent(randomGua.sentence)}`;
            window.location.href = url;
        });
        
        modalContent.appendChild(sentenceElement);
        modalContent.appendChild(forwardBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }, 3000);
});

resetBtn.addEventListener('click', resetDraw);

// 窗口大小变化时重新计算布局
window.addEventListener('resize', () => {
    // 强制重绘，确保响应式样式生效
    document.body.style.display = 'none';
    document.body.offsetHeight; // 触发重绘
    document.body.style.display = 'flex';
});

// 创建雪花效果
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;
    
    const snowflakeCount = 100; // 增加雪花数量
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // 随机大小
        const size = Math.random() * 10 + 6; // 6-16px，增加大小
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // 随机位置
        snowflake.style.left = `${Math.random() * 100}%`;
        
        // 随机下落速度
        const duration = Math.random() * 8 + 8; // 8-16s，加快速度
        snowflake.style.animationDuration = `${duration}s`;
        
        // 随机延迟
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        snowContainer.appendChild(snowflake);
    }
}

// 初始化
window.onload = function() {
    initCarousel();
    createSnowflakes();
};
