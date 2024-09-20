package com.sha.flightmanager.dto;

public record AvionRequest(Integer numAvion,
                           String nomAvion,
                           int capacite,
                           String localisation) {
}
