package com.sha.flightmanager.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vol")
public class Vol {
    @Id
    @Column(name = "numvol", length = 6)
    private String numVol;

    @ManyToOne
    @JoinColumn(name = "numpilote", nullable = false)
    private Pilote pilote;

    @ManyToOne
    @JoinColumn(name = "numavion", nullable = false)
    private Avion avion;

    @Column(name = "villedep", length = 20)
    private String villeDep;

    @Column(name = "villearr", length = 20)
    private String villeArr;

    @Column(name = "heuredep", length = 5)
    private String heureDep;

    @Column(name = "heurearr", length = 5)
    private String heureArr;
}