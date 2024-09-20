package com.sha.flightmanager.controller;

import com.sha.flightmanager.dto.AvionResponse;
import com.sha.flightmanager.services.AvionService;
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
@RequestMapping("api/v1/avions")

@Tag(name = "Avion", description = "API pour la gestion des avions")
public class AvionController {
    private final AvionService avionService;
    @GetMapping("/all")
    @Operation(summary = "Obtenir tous les avions",
            description = "Récupère une liste de tous les avions disponibles")

    public ResponseEntity<List<AvionResponse>> findAll() {
        return ResponseEntity.ok(avionService.findAll());
    }


}
