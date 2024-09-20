package com.sha.flightmanager.controller;

import com.sha.flightmanager.dto.VolRequest;
import com.sha.flightmanager.dto.VolResponse;
import com.sha.flightmanager.services.VolService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/vols")

@Tag(name = "Vol", description = "API pour la gestion des vols")

public class VolController {
    private final VolService volService;
    @GetMapping("/all")
    @Operation(summary = "Obtenir tous les vols",
            description = "Récupère une liste de tous les vols disponibles")
    public ResponseEntity<List<VolResponse>> findAll() {
        return ResponseEntity.ok(volService.findAll());
    }
    @GetMapping("/filterByPiloteAvion")
    @Operation(summary = "Obtenir tous les vols ",
            description = "Récupère une liste de tous les vols disponibles par avion et pilote")

    public ResponseEntity<List<VolResponse>> getFilteredVols(@RequestParam Integer numpilote, @RequestParam Integer numavion) {
        return ResponseEntity.ok(volService.findIdByPiloteAndAndAvion(numpilote, numavion));

    }
    @PostMapping
    @Operation(summary = "Ajouter un vol",
            description = "Ajout  un vol selon la disponibilité de pilote et de l'avion")
    public ResponseEntity<Void > saveVol(
             @RequestBody VolRequest request

    ) {
        volService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }



}
