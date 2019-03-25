package com.team4.warstars;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.*;

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
public class ItemAndLocationTest {

	// Item Test Variables
	private long id = 123;
	private long itemId = 123;
	private String cat = "Melee";
	private String classification = "Jedi";
	private String mod = "lightsaber";
	private int cost = 50000;
	private boolean restrict = true;

	Item myStuff = new Item(id, itemId, cat, classification, mod, cost, restrict);

	@Test
	public void test() {
	}

	// Test for Items
	@Test
	public void verifyItem() {
		assertEquals(id, myStuff.getId());
		assertEquals(itemId, myStuff.getItemId());
		assertEquals(cat, myStuff.getCategory());
		assertEquals(classification, myStuff.getClassification());
		assertEquals(mod, myStuff.getModel());
		assertEquals(cost, myStuff.getCost());
	}

	@Test
	public void changeItemInfo() {
		myStuff.setId(3);
		assertEquals(3, myStuff.getId());

		myStuff.setItemId(23);
		assertEquals(23, myStuff.getItemId());

		myStuff.setClassification("Blasters");
		assertEquals("Blasters", myStuff.getClassification());

		myStuff.setCategory("Military");
		assertEquals("Military", myStuff.getCategory());

		myStuff.setModel("RX3-Blaster");
		assertEquals("RX3-Blaster", myStuff.getModel());

		myStuff.setCost(100000);
		assertEquals(100000, myStuff.getCost());
	}

	// Testing the Status Code for REST API service
	@Test
	public void ifUserDoesNotExist_whenInfoRetrieved_then200() throws ClientProtocolException, IOException {

		// Given
		//String name = RandomString.make();
		String tempCategory = "Supplies";
		HttpUriRequest request = new HttpGet("http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/items"
				+ "/search/findByCategory?category=" + tempCategory);

		// When
		HttpResponse httpResp = HttpClientBuilder.create().build().execute(request);

		// Then
		assertThat(httpResp.getStatusLine().getStatusCode(), equalTo(HttpStatus.SC_OK));
	}

	// Test Media Type Expected...JSON.
	@Test
	public void requestWithNoHeader_whenExecuted_thenDefaultResponseTypeIsJson()
			throws ClientProtocolException, IOException {

		// Given
		String jsonMimeType = "application/hal+json";
		HttpUriRequest request = new HttpGet(
				"http://swirl-env.4jnneajyag.us-east-2.elasticbeanstalk.com/" 
		+ "/search/findByCategory?category=Weapons");

		// When
		HttpResponse response = HttpClientBuilder.create().build().execute(request);

		// Then
		String mimeType = ContentType.getOrDefault(response.getEntity()).getMimeType();
		assertEquals(jsonMimeType, mimeType);
	}

	// Tests for Locations
	private long locateId = 80;
	private long locateLocationId = 800;
	private String locateName = "Nebula";
	
	Locations myLocation = new Locations(locateId, locateLocationId, locateName);
	
	@Test
	public void verifyLocationInfo() {
		assertEquals(locateId, myLocation.getId());
		assertEquals(locateLocationId, myLocation.getLocationId());
		assertEquals(locateName, myLocation.getName());
	}
	
	@Test
	public void changeLocationInfo() {
		myLocation.setId(20);
		assertEquals(20, myLocation.getId());
		
		myLocation.setLocationId(200);
		assertEquals(200, myLocation.getLocationId());
		
		myLocation.setName("Dohrab");
		assertEquals("Dohrab", myLocation.getName());
	}
}
