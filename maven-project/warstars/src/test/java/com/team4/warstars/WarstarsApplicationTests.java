package com.team4.warstars;


import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import java.io.IOException;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import net.bytebuddy.utility.RandomString;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WarstarsApplicationTests {
	
	//Inventory Test Variables
	private long id = 1;
	private int locationId = 100;
	String item = "Gunner-X";
	
	Inventory myStuff = new Inventory(id, locationId, item);

	@Test
	public void contextLoads() {
	}
	
	@Test
	public void verifyInventoryInfo() {
		assertEquals(id, myStuff.getId());
		assertEquals(locationId, myStuff.getLocationId());
		assertEquals(item, myStuff.getItems());

	}
	
	@Test
	public void changeInventoryInfo() {
		//Check if we are able to update info
		myStuff.setId(11);
		assertEquals(11, myStuff.getId());
		
		myStuff.setLocationId(111);
		assertEquals(111, myStuff.getLocationId());
		
		myStuff.setItems("X-Wing Fighter");
		assertEquals("X-Wing Fighter", myStuff.getItems());
	}
	
	//Testing the Status Code for REST API service
	@Test
	public void ifUserDoesNotExist_whenInfoRetrieved_then200() 
		throws ClientProtocolException, IOException{
		
		//Given
		String name = RandomString.make();
		HttpUriRequest request = new HttpGet("http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/"
				+ "officers/search/findByRank?rank=" + name);
		
		//When
		HttpResponse httpResp = HttpClientBuilder.create().build().execute(request);
		
		//Then
		assertThat(
				httpResp.getStatusLine().getStatusCode(),
				equalTo(HttpStatus.SC_OK));
	}
	
	//Test Media Type Expected...JSON.
	@Test
	public void requestWithNoHeader_whenExecuted_thenDefaultResponseTypeIsJson() 
		throws ClientProtocolException, IOException{
		
		//Given
		String jsonMimeType ="application/hal+json";
		HttpUriRequest request = new HttpGet("http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/"
								+ "officers/search/findByRank?rank=1");
		
		//When
		HttpResponse response =  HttpClientBuilder.create().build().execute(request);
		
		//Then
		String mimeType = ContentType.getOrDefault(response.getEntity()).getMimeType();
		assertEquals(jsonMimeType, mimeType);
	}

}
