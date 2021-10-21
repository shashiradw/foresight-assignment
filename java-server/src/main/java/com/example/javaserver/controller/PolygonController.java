package com.example.javaserver.controller;

import com.example.javaserver.model.Point;
import com.example.javaserver.model.PolygonModel;
import com.example.javaserver.model.UserPolygonModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@CrossOrigin()
@RestController
public class PolygonController {

    //Pre-defined property
    //Circle
    private double radius=15.0;
    //Rect
    private double rectangHeight=75.0;
    private double rectangWidth=100.0;

    //Triangle
    private double triangleLen=50.0;


    @PostMapping("/addpolygon")
    @ResponseBody
    public ResponseEntity<PolygonModel> addNewPolygon(@RequestBody UserPolygonModel userPolygonModel){

        System.out.println(userPolygonModel.toString());
        if(userPolygonModel != null){

            int shape= createRandomShape();

            if(shape == 0){
                //Rectangle
                return ResponseEntity.ok(generateRectangle(userPolygonModel));
            }
//            else if(shape ==1){
//                //triangle
//            }else{
//                //Circle
//            }

        }
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new PolygonModel());
    }

    //create random shape
    private int createRandomShape(){
        Random rand = new Random();
        int rand_int = rand.nextInt(3);

        //return rand_int;
        return 0;
    }

    private PolygonModel generateRectangle(UserPolygonModel userPolygonModel){

        boolean isOverlapped=false;

        //Generate rectangle
        PolygonModel rectangle=new PolygonModel();
        rectangle.setPolygonType("rectangle");

        List<Point> points = new ArrayList<>();
        Point point=userPolygonModel.getPoint();
        points.add(new Point(point.getX(),point.getY()-rectangHeight));
        points.add(point);
        points.add(new Point(point.getX()+rectangWidth,point.getY()));
        points.add(new Point(point.getX()+rectangWidth,point.getY()-rectangHeight));

        //Add new rectangle points
        rectangle.setCoordinates(points);

        for (PolygonModel polygonModel : userPolygonModel.getPolygons()) {

            if(polygonModel.getPolygonType().equals("rectangle")){
                isOverlapped=rectangleOverlap(polygonModel,rectangle);

            }
            if(isOverlapped){
                rectangle.setOverlapped(true);
                break;
            }
            //Circle & Triangle.....
        }
        return rectangle;
    }

    //Rectangle - rectangle overlap
    private boolean rectangleOverlap(PolygonModel a,PolygonModel b){
        boolean overlapped=false;
        if(a.getCoordinates().get(1).getX() > b.getCoordinates().get(3).getX() || a.getCoordinates().get(3).getX() < b.getCoordinates().get(1).getX() || a.getCoordinates().get(1).getY() < b.getCoordinates().get(3).getY()  || a.getCoordinates().get(3).getY() > b.getCoordinates().get(1).getY() ){
            overlapped=false;
        }else{
            overlapped=true;
        }
        return overlapped;
    }









}
