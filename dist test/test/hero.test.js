let e=require("axios"),t="http://localhost:3001/hero",s={token:"12345",id:"id"};test("should return Token is required",(async()=>{let a={Authorization:`Bearer ${s.token}`};try{let s=await e.post(t+"/add",null,{headers:a});expect(s.data.error).toBe("Token is required"),expect(s.status).toBe(401)}catch(o){}})),test("should return create hero success",(async()=>{let a=await e.post(t+"/add",s),o=a.data;expect(a.status).toBe(200),s.id=o.data._id,expect(o.message).toBe("Create hero success.")})),test("should return delete success",(async()=>{let a=await e.post(t+"/delete",s),o=a.data;expect(a.status).toBe(200),expect(o.message).toBe("Delete hero success.")}));