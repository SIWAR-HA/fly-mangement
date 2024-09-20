package com.sha.flightmanager.controller;

import com.sha.flightmanager.dto.PiloteResponse;
import com.sha.flightmanager.services.PiloteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor

@RequestMapping("api/v1/pilotes")
@Tag(name = "Pilote", description = "API pour la gestion des pilotes")
public class PiloteController {

    private final PiloteService piloteService;
    @GetMapping("/all")
    @Operation(summary = "Obtenir tous les pilotes",
            description = "Récupère une liste de tous les pilotes disponibles")
    public ResponseEntity<List<PiloteResponse>> findAll() {
        return ResponseEntity.ok(piloteService.findAll());
    }


}
