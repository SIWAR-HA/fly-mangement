package com.sha.flightmanager.dto;

public record VolRequest(String numVol,
                         Integer numPilote,
                         Integer numAvion,
                         String villeDep,
                         String villeArr,
                         String heureDep,
                         String heureArr) {
}
