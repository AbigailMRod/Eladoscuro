package com.eladoscuro.ecommerce;

import com.eladoscuro.model.usuario;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class EcommerceApplicationTests {

	@Autowired
	private MockMvc mockMvc; //levanta de forma automatica el servicio


	//	@Test
//	void contextLoads() {
//	}
	@Test
	public void TestPut() throws Exception{
		usuario usuario = new usuario();
		this.mockMvc.perform(put("/api/usuarios/7?originalPassword=Gener@tion.&newPassword=3ladOscuro_09.")
				).andDo(print())
				.andExpect(status().isOk());
	}//TestPut

	@Test
	public void TestGet() throws Exception {
		this.mockMvc.perform(get("/api/usuarios/") ).andDo(print())
				.andExpect(status().isOk() )
				.andExpect(content().string(containsString("@gmail.com") ) );//Aqui se le dice que queremos que se ejecute

		this.mockMvc.perform(get("/api/usuarios/1") ).andDo(print())
				.andExpect(status().isOk() )
				.andExpect(content().string(containsString("cristian.monarres.mtz@gmail.com") ) );//Aqui se le dice que queremos que se ejecute
	}//TestGet


	@Test
	public void TestDelete() throws Exception{
		this.mockMvc.perform( delete("/api/usuarios/6"))
				.andDo(print())
				.andExpect(status().isOk());
	}//TestDelete

//	@Test
//	public void shouldReturn404Error() throws Exception{ //cliente no existe
//		this.mockMvc.perform(get("/api/usuarios/5") ).andDo(print())
//				.andExpect(status().is5xxServerError() );
//	}//shouldReturn404Error

	@Test
	public void TestPOST() throws Exception{ //clrear un nuevo cliente
		usuario usuario = new usuario();
		usuario.setNombre("Christian Neri");
		usuario.setEmail("neri.christian98@gmail.com");
		usuario.setTelefono("5531338674");
		usuario.setClearPassword("Gener@tion.");
		this.mockMvc.perform(post("/api/usuarios/")
						.contentType(MediaType.APPLICATION_JSON).
						content(asJSONString(usuario) ) ).
				andExpect(status().isOk());
	}//TestPOST

	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString

}//class EcommerceApplicationTests
