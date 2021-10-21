package com.example.javaserver.model;

import lombok.Data;

import java.util.List;

@Data
public class UserPolygonModel {

    private Point point;
    private List<PolygonModel> polygons;

}
