package com.sha.flightmanager.mapper;

import com.sha.flightmanager.dto.PiloteRequest;
import com.sha.flightmanager.dto.PiloteResponse;
import com.sha.flightmanager.model.Pilote;
import org.springframework.stereotype.Service;

@Service
public class PiloteMapper {
    public Pilote toPilote(PiloteRequest request) {
        if (request == null) {
            return null;
        }

        return Pilote.builder()
                .numPilote(request.numPilote())
                .nomPilote(request.nomPilote())
                .adresse(request.adresse())
                .build();
    }


    public PiloteResponse fromPilote(Pilote pilote) {
        if (pilote == null) {
            return null;
        }
        return new PiloteResponse(
                pilote.getNumPilote(),
                pilote.getNomPilote(),
                pilote.getAdresse()
        );
    }
}
