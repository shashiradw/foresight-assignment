package com.example.javaserver.model;

import lombok.Data;

import java.util.List;

@Data
public class PolygonModel {

    private String polygonType;
    private List<Point> coordinates;
    private boolean isOverlapped=false;

}
