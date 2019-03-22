package com.team4.warstars;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "orders")
public class Order 
{
//id:number;
//user:number;
//itemsOrdered:Item[];
//items:Map<number, number>
//isAuthorized:boolean;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private long orderId;
	private long userId;
//	private Item[] itemsOrdered;
	private String itemsOrdered;
	private long cost;
	private boolean authorizationRequired;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
//	public Item[] getItemsOrdered() {
//		return itemsOrdered;
//	}
//	public void setItemsOrdered(Item[] itemsOrdered) {
//		this.itemsOrdered = itemsOrdered;
//	}
	public long getCost() {
		return cost;
	}
	public String getItemsOrdered() {
		return itemsOrdered;
	}
	public void setItemsOrdered(String itemsOrdered) {
		this.itemsOrdered = itemsOrdered;
	}
	public void setCost(long cost) {
		this.cost = cost;
	}
	public boolean isAuthorizationRequired() {
		return authorizationRequired;
	}
	public void setAuthorizationRequired(boolean authorizationRequired) {
		this.authorizationRequired = authorizationRequired;
	}
}
