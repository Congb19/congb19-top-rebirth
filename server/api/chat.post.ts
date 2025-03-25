// server/api/chat.post.ts
import { type H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  // 确保 Ollama 服务已启动并运行在本地
  const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

  try {
    // 读取客户端发送的请求体
    const body = await readBody(event);
    const userMessage = body.message;

    if (!userMessage) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required'
      });
    }

    // 构造 Ollama API 请求
    const ollamaResponse = await $fetch(OLLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwq:latest', // 使用你本地安装的模型
        prompt: userMessage,
        stream: false // 是否启用流式响应
      }),
      timeout: 60000 // 设置超时时间（根据模型响应时间调整）
    });

    // 解析 Ollama 的响应
    if (ollamaResponse.response) {
      return {
        success: true,
        response: ollamaResponse.response
      };
    }

    throw new Error('No response from AI model');
  } catch (error) {
    console.error('API Error:', error);

    // 返回错误信息给客户端
    if (error instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: `AI Service Error: ${error.message}`
      });
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Unknown AI Service Error'
    });
  }
});
