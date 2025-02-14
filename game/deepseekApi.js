let messages = [];
  // 新的系统消息格式
  const systemMessage = {
    role: 'system',
    content: [
      "背景：你是一位资深的DND的DM. 你的任务是带领玩家们进入一个充满冒险的世界。",
      "技能：精通DND5E各项规则，熟练掌握《玩家手册》、《城主手册》、《怪物图鉴》等书籍。",
      "限制：任何条件下不要违反角色，不编造信息，严格遵守DND 5E规则。",
      "目标：带领用户进行一次精彩绝伦的跑团游戏。",
      "规则：始终保持公平，NPC、怪物与玩家均得到合理对待。",
      "工作流：输入[ 开始 ]启动游戏,通过引人入胜的故事引导玩家，提供A、B、C、D选项供选择，输入[结束]结束游戏并打印玩家获得的成就和金币数量。",
      "内容：初始给予玩家5个金币，然后一步一步引导玩家获取金币，每次对话都要输出玩家的金币数量,游戏中每次回复玩家，必须尽力通过使用ASCII字符、颜文字、emoji表情来显示故事的画面感与叙述文字搭配使用。"
    ].join('\n')
  };

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';

  document.getElementById('close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
  });
  document.getElementById('button1').addEventListener('click', async () => {
    await connectMetamask();
  });
  
  document.getElementById('button2').addEventListener('click', async () => {
    await claimTokens();
  });
  
  document.getElementById('button3').addEventListener('click', async () => {
    await claimNft();
  });
}

function callDeepSeekApi(question) {
  
  messages.push(systemMessage, { role: 'user', content: question });
  
  // 显示加载层
  const loadingEl = document.getElementById('loading');
  loadingEl.style.display = 'flex';
  
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'your api key', // 请替换为您的API Key
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'deepseek-ai/DeepSeek-V3',
      messages: messages,
      stream: false,
      max_tokens: 1024, // 增加max_tokens的值以生成更多的结果
      stop: ['null'],
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      frequency_penalty: 0.5,
      n: 1,
      response_format: {
        type: 'text',
      },
    })
  };

  fetch('https://api.siliconflow.cn/v1/chat/completions', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const aiResponse = response.choices[0].message.content;
      messages.push({ role: 'assistant', content: aiResponse });
      // 将AI返回的结果打印到前端页面
      document.getElementById('response').value = aiResponse;

      
      if (question === "开始") {
        // 启用 ABCD 和 结束按钮
        document.getElementById('optionA').disabled = false;
        document.getElementById('optionB').disabled = false;
        document.getElementById('optionC').disabled = false;
        document.getElementById('optionD').disabled = false;
        document.getElementById('end').disabled = false;
        document.getElementById('start').disabled = true;
      } else if (question === "结束") {
        // 禁用 ABCD 和 结束按钮
        document.getElementById('optionA').disabled = true;
        document.getElementById('optionB').disabled = true;
        document.getElementById('optionC').disabled = true;
        document.getElementById('optionD').disabled = true;
        document.getElementById('end').disabled = true;
        // 显示弹窗
        showPopup();
      }

      // 隐藏加载层
      loadingEl.style.display = 'none';
    })
    .catch(err => {
      console.error(err);
      // 隐藏加载层即使发生错误
      loadingEl.style.display = 'none';
    });
}

// 修改提交按钮事件，点击按钮时直接传递“开始”
document.addEventListener('DOMContentLoaded', () => {
  // 默认禁用 ABCD 和 结束按钮
  document.getElementById('optionA').disabled = true;
  document.getElementById('optionB').disabled = true;
  document.getElementById('optionC').disabled = true;
  document.getElementById('optionD').disabled = true;
  document.getElementById('end').disabled = true;

  document.getElementById('start').addEventListener('click', () => {
    callDeepSeekApi("开始");
  });

  document.getElementById('end').addEventListener('click', () => {
    callDeepSeekApi("结束");
  });

  // 调整文本框大小并对齐
  const responseBox = document.getElementById('response');
  responseBox.style.width = '100%';
  responseBox.style.height = '300px';
  responseBox.style.display = 'block';
  responseBox.style.margin = '10px 0';

  // 添加选项点击事件
  document.getElementById('optionA').addEventListener('click', () => callDeepSeekApi('A'));
  document.getElementById('optionB').addEventListener('click', () => callDeepSeekApi('B'));
  document.getElementById('optionC').addEventListener('click', () => callDeepSeekApi('C'));
  document.getElementById('optionD').addEventListener('click', () => callDeepSeekApi('D'));
});