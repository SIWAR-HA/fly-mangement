package com.sha.flightmanager.dto;


import com.sha.flightmanager.model.Avion;
import com.sha.flightmanager.model.Pilote;

public record VolResponse(String numVol,
                          Pilote pilote,
                          Avion avion,
                          String villeDep,
                          String villeArr,
                          String heureDep,
                          String heureArr) {
}
