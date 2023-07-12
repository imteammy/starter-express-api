// routes/index.js
import fastify from 'fastify';

const route = async (fastify, options) => {
  fastify.get('/:model', async (request, reply) => {
    console.log(request.params)
    reply.send(request.params);
  });

  fastify.post('/users', async (request, reply) => {
    // โค้ดการจัดการเส้นทางสำหรับการสร้างผู้ใช้ใหม่
  });

  // เพิ่มเส้นทางอื่นๆ ที่คุณต้องการ
};

export default route;
