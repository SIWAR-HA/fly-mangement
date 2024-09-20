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
@Table(name = "pilote")
public class Pilote {
    @Id
    @Column(name = "numpilote")
    private Integer numPilote;

    @Column(name = "nompilote", length = 20)
    private String nomPilote;

    @Column(name = "adresse", length = 20)
    private String adresse;
}
