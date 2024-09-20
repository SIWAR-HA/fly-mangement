package com.sha.flightmanager.mapper;


import com.sha.flightmanager.dto.VolRequest;
import com.sha.flightmanager.dto.VolResponse;
import com.sha.flightmanager.model.Avion;
import com.sha.flightmanager.model.Pilote;
import com.sha.flightmanager.model.Vol;
import com.sha.flightmanager.repositories.AvionRepository;
import com.sha.flightmanager.repositories.PiloteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VolMapper {

    private final PiloteRepository piloteRepository;
    private final AvionRepository avionRepository;




    public Vol toVol(VolRequest request) {
        if (request == null) {
            return null;
        }


        Pilote pilote = piloteRepository.findById(request.numPilote()).orElse(null); // Assumes Optional and methods
        Avion avion = avionRepository.findById(request.numAvion()).orElse(null);

        return Vol.builder()
                .numVol(request.numVol())
                .pilote(pilote)
                .avion(avion)
                .villeDep(request.villeDep())
                .villeArr(request.villeArr())
                .heureDep(request.heureDep())
                .heureArr(request.heureArr())
                .build();
    }


    public VolResponse fromVol(Vol vol) {
        if (vol == null) {
            return null;
        }

        return new VolResponse(
                vol.getNumVol(),
                vol.getPilote(),
                vol.getAvion(),
                vol.getVilleDep(),
                vol.getVilleArr(),
                vol.getHeureDep(),
                vol.getHeureArr()
        );
    }

}
