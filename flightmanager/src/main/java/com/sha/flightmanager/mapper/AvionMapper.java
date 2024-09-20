package com.sha.flightmanager.mapper;
import com.sha.flightmanager.dto.AvionRequest;
import com.sha.flightmanager.dto.AvionResponse;
import com.sha.flightmanager.model.Avion;
import org.springframework.stereotype.Service;
@Service
public class AvionMapper {
    public Avion toAvion(AvionRequest request) {
        if (request == null) {
            return null;
        }
        return Avion.builder()
                .numAvion(request.numAvion())
                .nomAvion(request.nomAvion())
                .capacite(request.capacite())
                .localisation(request.localisation())
                .build();
    }


    public AvionResponse fromAvion(Avion avion) {
        if (avion == null) {
            return null;
        }
        return new AvionResponse(
                avion.getNumAvion(),
                avion.getNomAvion(),
                avion.getCapacite(),
                avion.getLocalisation()
        );
    }
}
