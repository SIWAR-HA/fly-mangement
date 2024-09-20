package com.sha.flightmanager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "avion")
public class Avion {
    @Id
    @Column(name = "numavion")
    private Integer numAvion;

    @Column(name = "nomavion", length = 20)
    private String nomAvion;

    @Column(name = "capacite")
    private int capacite;

    @Column(name = "localisation", length = 20, nullable = false)
    private String localisation ;
}