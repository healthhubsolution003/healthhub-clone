import React, { useState } from "react";
import "./Products.css";
import "./Products.css";

import adultincontinence from "../assets/adultincontinence.png";
import womenswellness from "../assets/womenswellness.png";

import walkingaids from "../assets/walkingaids.jpeg";
import sportgear from "../assets/sportgear.png";
import last from "../assets/last.png";
import hygiene from "../assets/hygiene.jpg";
import baby from "../assets/baby.jpg";
import fractureaids from "../assets/fractureaids.JPG";
import orthopedic from "../assets/orthopedic.jpg";
import surgical from "../assets/surgical.jpg";
import surgicaldressing from "../assets/surgicaldressing.JPG";
import woundcare from "../assets/woundcare&cotton.jpeg";

import sub1 from "../assets/1.1.jpg";
import sub2 from "../assets/1.2.jpg";
import sub3 from "../assets/1.3.jpeg";
import sub4 from "../assets/1.4.jpg";
import sub5 from "../assets/1.5.jpg";
import sub6 from "../assets/1.6.jpg";
import sub7 from "../assets/1.7.jpeg";

import sub41 from "../assets/4.1.jpg";
import sub42 from "../assets/4.2.jpg";
import sub43 from "../assets/4.3.jpg";
import sub44 from "../assets/4.4.jpeg";
import sub21 from "../assets/2.1.jpg";
import sub22 from "../assets/2.2.jpeg";
import sub23 from "../assets/2.3.jpg";
import sub31 from "../assets/3.1.png";
import sub32 from "../assets/3.2.png";
import sub33 from "../assets/3.3.jpeg";
import sub34 from "../assets/3.4.jpg";
import sub35 from "../assets/3.5.jpg";

import sub51 from "../assets/5.1.jpeg";
import sub52 from "../assets/5.2.jpg";
import sub53 from "../assets/5.3.jpeg";
import sub54 from "../assets/5.4.jpg";
import sub55 from "../assets/5.5.jpg";
import sub56 from "../assets/5.6.jpg";
import sub57 from "../assets/5.7.jpeg";
import sub58 from "../assets/5.8.jpeg";
import sub59 from "../assets/5.9.jpg";
import sub510 from "../assets/5.10.png";
import sub511 from "../assets/5.11.jpeg";
import sub512 from "../assets/5.12.png";
import sub513 from "../assets/5.13.jpeg";

import sub61 from "../assets/6.1.png";
import sub62 from "../assets/6.2.png";
import sub63 from "../assets/6.3.jpg";
import sub64 from "../assets/6.4.png";
import sub65 from "../assets/6.5.png";
import sub66 from "../assets/6.6.png";
import sub67 from "../assets/6.7.jpg";
import sub68 from "../assets/6.8.jpeg";
import sub69 from "../assets/6.9.jpg";
import sub610 from "../assets/6.10.jpeg";
import sub611 from "../assets/6.11.png";
import sub612 from "../assets/6.12.png";

// Category 7
import sub71 from "../assets/7.1.png";
import sub72 from "../assets/7.2.png";
import sub73 from "../assets/7.3.png";
import sub74 from "../assets/7.4.png";
import sub75 from "../assets/7.5.png";
import sub76 from "../assets/7.6.png";
import sub77 from "../assets/7.7.png";
import sub78 from "../assets/7.8.png";
import sub79 from "../assets/7.9.png";
import sub710 from "../assets/7.10.png";
import sub711 from "../assets/7.11.png";
import sub712 from "../assets/7.12.png";
import sub713 from "../assets/7.13.png";
import sub714 from "../assets/7.14.png";
import sub715 from "../assets/7.15.png";
import sub716 from "../assets/7.16.png";
import sub717 from "../assets/7.17.png";
import sub718 from "../assets/7.18.png";
import sub719 from "../assets/7.19.png";
import sub720 from "../assets/7.20.png";
import sub721 from "../assets/7.21.png";
import sub722 from "../assets/7.22.png";
import sub723 from "../assets/7.23.png";
import sub724 from "../assets/7.24.png";
import sub725 from "../assets/7.25.png";
import sub726 from "../assets/7.26.png";
import sub727 from "../assets/7.27.png";
import sub728 from "../assets/7.28.png";
import sub729 from "../assets/7.29.png";
import sub730 from "../assets/7.30.png";

import sub81 from "../assets/8.1.png";
import sub82 from "../assets/8.2.png";
import sub83 from "../assets/8.3.png";
import sub84 from "../assets/8.4.png";
import sub85 from "../assets/8.5.png";
import sub86 from "../assets/8.6.png";
import sub87 from "../assets/8.7.png";
import sub88 from "../assets/8.8.png";
import sub89 from "../assets/8.9.png";
import sub810 from "../assets/8.10.png";
import sub811 from "../assets/8.11.png";
import sub812 from "../assets/8.12.png";
import sub813 from "../assets/8.13.png";
import sub814 from "../assets/8.14.png";
import sub815 from "../assets/8.15.png";

import sub91 from "../assets/9.1.png";
import sub92 from "../assets/9.2.png";
import sub93 from "../assets/9.3.png";
import sub94 from "../assets/9.4.png";
import sub95 from "../assets/9.5.png";
import sub96 from "../assets/9.6.png";
import sub97 from "../assets/9.7.png";
import sub98 from "../assets/9.8.png";
import sub99 from "../assets/9.9.png";
import sub910 from "../assets/9.10.png";
import sub911 from "../assets/9.11.png";
import sub912 from "../assets/9.12.png";
import sub913 from "../assets/9.13.png";
import sub914 from "../assets/9.14.png";
import sub915 from "../assets/9.15.png";
import sub916 from "../assets/9.16.png";
import sub917 from "../assets/9.17.png";

import sub101 from "../assets/10.1.png";
import sub102 from "../assets/10.2.png";
import sub103 from "../assets/10.3.png";
import sub104 from "../assets/10.4.png";
import sub105 from "../assets/10.5.png";
import sub106 from "../assets/10.6.png";
import sub107 from "../assets/10.7.png";
import sub108 from "../assets/10.8.png";
import sub109 from "../assets/10.9.png";
import sub1010 from "../assets/10.10.png";
import sub1011 from "../assets/10.11.png";
import sub1012 from "../assets/10.12.png";
import sub1013 from "../assets/10.13.png";
import sub1014 from "../assets/10.14.png";
import sub1015 from "../assets/10.15.png";

import sub111 from "../assets/11.1.png";
import sub112 from "../assets/11.2.png";
import sub113 from "../assets/11.3.png";
import sub114 from "../assets/11.4.png";
import sub115 from "../assets/11.5.png";
import sub116 from "../assets/11.6.png";
import sub117 from "../assets/11.7.png";
import sub118 from "../assets/11.8.png";
import sub119 from "../assets/11.9.png";
import sub1110 from "../assets/11.10.png";
import sub1111 from "../assets/11.11.png";
import sub1112 from "../assets/11.12.png";
import sub1113 from "../assets/11.13.png";
import sub1114 from "../assets/11.14.png";

import sub121 from "../assets/12.1.png";
import sub122 from "../assets/12.2.png";
import sub123 from "../assets/12.3.png";
import sub124 from "../assets/12.4.png";
import sub125 from "../assets/12.5.png";
import sub126 from "../assets/12.6.png";
import sub127 from "../assets/12.7.png";
import sub128 from "../assets/12.8.png";

import sub131 from "../assets/13.1.png";
import sub132 from "../assets/13.2.png";
import sub133 from "../assets/13.3.png";
import sub134 from "../assets/13.4.png";
import sub135 from "../assets/13.5.png";
import sub136 from "../assets/13.6.png";
import sub137 from "../assets/13.7.png";
import sub138 from "../assets/13.8.png";
import sub139 from "../assets/13.9.png";
import sub1310 from "../assets/13.10.png";
import sub1311 from "../assets/13.11.png";
import sub1312 from "../assets/13.12.png";
import sub1313 from "../assets/13.13.png";
import sub1314 from "../assets/13.14.png";
import sub1315 from "../assets/13.15.png";
import sub1316 from "../assets/13.16.png";
import sub1317 from "../assets/13.17.png";
import sub1318 from "../assets/13.18.png";
import sub1319 from "../assets/13.19.png";
import sub1320 from "../assets/13.20.png";

import sub141 from "../assets/14.1.png";
import sub142 from "../assets/14.2.png";
import sub143 from "../assets/14.3.png";
import sub144 from "../assets/14.4.png";
import sub145 from "../assets/14.5.png";
import sub146 from "../assets/14.6.png";
import sub147 from "../assets/14.7.png";
import sub148 from "../assets/14.8.png";
import sub149 from "../assets/14.9.png";
import sub1410 from "../assets/14.10.png";
import sub1411 from "../assets/14.11.png";
import sub1412 from "../assets/14.12.png";
import sub1413 from "../assets/14.13.png";
import sub1414 from "../assets/14.14.png";
import sub1415 from "../assets/14.15.png";
import sub1416 from "../assets/14.16.png";

const products = [
 
  {
  id: 1,
  brand: "Dreamease",
  category: "Feminine Hygiene Care",
  image: hygiene,
  desc: "Premium feminine hygiene and wellness essentials.",
 subproducts: [
  { name: "Disposable Period Panty", image: sub1, desc: "Comfortable & leak-proof" },
  { name: "Sanitary Pads Ultra Soft XL with Wings", image: sub2, desc: "Ultra soft, XL with wings" },
  { name: "Panty Liners (155mm & 185mm)", image: sub3, desc: "Available in 155mm & 185mm" },
  { name: "Menstrual Cup (Small, Medium & Large)", image: sub4, desc: "Small, Medium & Large sizes" },
  { name: "Intimate Wash Natural Sulfate Free", image: sub5, desc: "Natural, sulfate free formula" },
  { name: "Period Relax & Relief Cream", image: sub6, desc: "Soothing relief cream" },
  { name: "Pregnancy Test Kit", image: sub7, desc: "Fast & accurate results" },
],
},


  {
    id: 2,
    brand: "Dreamease",
    category: "Baby Care",
    image: baby,
    desc: "Dermatologically safe baby hygiene products.",
    subproducts: [
  { name: "Baby Diapers Pant Style (NB, S, M, L & XL)", image: sub21, desc: "Soft & gentle on baby skin",contain: true },
  { name: "Baby Wipes Regular 99% Water Based", image: sub22, desc: "99% water based, hypoallergenic" },
  { name: "Baby Wipes Honey", image: sub23, desc: "Gentle honey formula" },
],
  },
  {
    id: 3,
    brand: "Dreamease",
    category: "Adult Incontinence",
    image: adultincontinence,
    desc: "Comfort-focused adult care and protection solutions.",
    subproducts: [
  { name: "Adult Pant Diaper Standard (M, L & XL)", image: sub31, desc: "Comfortable standard fit" ,contain: true},
  { name: "Adult Pant Diaper Premium (M, L & XL)", image: sub32, desc: "Premium protection & comfort" ,contain: true},
  { name: "Adult Tape Diaper Premium (M, L & XL)", image: sub33, desc: "Secure tape closure" },
  { name: "Underpad Sheet Regular", image: sub34, desc: "Absorbent regular underpad" },
  { name: "Underpad Sheet with Sticking Release Tape", image: sub35, desc: "With sticking release tape" },
],
  },

  {
  id: 4,
  brand: "Dreamease",
  category: "Women's Wellness",
  image: womenswellness,
  desc: "Daily wellness gummies and nutrition support.",
  subproducts: [
    { name: "UTI Defence Gummies", image: sub41, desc: "Urinary tract defence support" },
    { name: "Iron Gummies", image: sub42, desc: "Daily iron supplement" },
    { name: "Calcium & Vitamin-D Gummies", image: sub43, desc: "Bone strength support" },
    { name: "Multivitamin & Minerals Gummies", image: sub44, desc: "Complete daily nutrition" },
  ],
},


  {
    id: 5,
    brand: "Aurum Care",
    category: "Medical Disposables / Surgical",
    image: surgical,
    desc: "Hospital-grade disposable and surgical products.",
    subproducts: [
  { name: "Au-Fix Infusion Set (Classic & Ultra)", image: sub51, desc: "Classic & Ultra variants" },
  { name: "Au-Safe Disposable Syringes", image: sub52, desc: "Safe single-use syringes" },
  { name: "Au-Flon IV Cannula", image: sub53, desc: "Smooth IV cannula insertion" },
  { name: "Scalp Vein Set", image: sub54, desc: "Precision scalp vein set" },
  { name: "Urine Bag (Classic, Premium, Superior & with Urometer)", image: sub55, desc: "Multiple variants available" },
  { name: "2-Way Foley Balloon Catheter", image: sub56, desc: "2-way balloon catheter" },
  { name: "Oxygen Mask", image: sub57, desc: "Standard oxygen delivery mask" },
  { name: "Nebulizer Mask", image: sub58, desc: "For nebulization therapy" },
  { name: "Nasal Cannula", image: sub59, desc: "Comfortable nasal oxygen delivery" },
  { name: "High Oxygen Concentration Mask", image: sub510, desc: "High concentration oxygen mask" ,contain: true },
  { name: "Au-Care Surgical Gloves", image: sub511, desc: "Sterile surgical gloves" },
  { name: "Au-Pore Microporous Paper Tape", image: sub512, desc: "Gentle microporous tape" , contain: true },
  { name: "Au-Plast Elastic Adhesive Bandage", image: sub513, desc: "Elastic adhesive bandage" },
],

  },
  {
    id: 6,
    brand: "Wellness Surgical / Kramson",
    category: "Wound Care & Cotton",
    image: woundcare,
    desc: "Cotton, gauze, bandages and wound care essentials.",
    subproducts: [
  { name: "Absorbent Cotton Wellness Surgical", image: sub61, desc: "Premium absorbent cotton" },
  { name: "Absorbent Cotton Kramson", image: sub62, desc: "Premium absorbent cotton" },
  { name: "Zigzag Cotton", image: sub63, desc: "Zigzag cut cotton rolls",contain: true },
  { name: "Roller Bandage / Rolled Gauze", image: sub64, desc: "Standard roller bandage" },
  { name: "Gauze Cloth / Bandage Than Roll", image: sub65, desc: "Gauze cloth bandage roll" },
  { name: "Crepe Bandage (Standard & Premium)", image: sub66, desc: "Standard & Premium variants",contain: true },
  { name: "POP Bandage Kramson", image: sub67, desc: "Plaster of paris bandage" },
  { name: "Gauze Swabs Sterile Kramson", image: sub68, desc: "Sterile gauze swabs" },
  { name: "Elastic Adhesive Bandage Kramson", image: sub69, desc: "Elastic adhesive bandage",contain: true },
  { name: "Cannula Fixer Kramson", image: sub610, desc: "Secure cannula fixation",contain: true },
  { name: "Microporous Paper Tape Wellness Surgical", image: sub611, desc: "Gentle microporous tape" ,contain: true},
  { name: "Roller Bandage Kramson", image: sub612, desc: "Kramson roller bandage" },
],
  },
  {
  id: 7,
  brand: "Samson",
  category: "Orthopaedic Supports & Braces",
  image: orthopedic,
  desc: "Orthopaedic rehabilitation and support products.",
  subproducts: [
    { name: "Cervical Orthosis (Philadelphia)", image: sub71, desc: "Rigid cervical orthosis" },
    { name: "Cervical Collar Soft with Support", image: sub72, desc: "Soft collar with support" },
    { name: "Cervical Collar Soft (Firm Density)", image: sub73, desc: "Firm density soft collar" },
    { name: "Cervical Collar (Hard Adjustable)", image: sub74, desc: "Hard adjustable collar" },
    { name: "Abdominal Support 9\"/22.5cm", image: sub75, desc: "Abdominal support belt" },
    { name: "Tummy Trimmer/Abdominal Support 8\"/20cm", image: sub76, desc: "Tummy trimmer support" },
    { name: "Abdominal Belt", image: sub77, desc: "Post-surgery abdominal belt" },
    { name: "Ash-Brace (Hyper Extension Brace)", image: sub78, desc: "Hyper extension brace" },
    { name: "Hernia Belt", image: sub79, desc: "Hernia support belt" },
    { name: "Scrotal Support", image: sub710, desc: "Scrotal support" },
    { name: "Pelvic Binder", image: sub711, desc: "Pelvic stabilization binder" },
    { name: "Rib Belt", image: sub712, desc: "Rib fracture support belt" },
    { name: "Chest Binder", image: sub713, desc: "Chest compression binder" },
    { name: "Abdominal Corset (AB-Core)", image: sub714, desc: "Core abdominal corset" },
    { name: "Hip Corset (Mini Shaper)", image: sub715, desc: "Hip mini shaper corset" },
    { name: "Thigh Corset (Smart Shaper)", image: sub716, desc: "Thigh smart shaper" },
    { name: "Contoured Lumbo Sacral Support", image: sub717, desc: "Contoured lumbo sacral support" },
    { name: "Contoured Lumbo Sacral Support Eco", image: sub718, desc: "Eco lumbo sacral support" },
    { name: "Lumbo Sacral Belt (Lumbomed)(Neoprene)", image: sub719, desc: "Neoprene lumbo sacral belt" },
    { name: "Lumbo Sacral Belt", image: sub720, desc: "Standard lumbo sacral belt" },
    { name: "Lumbo Sacral Belt (Double Support)", image: sub721, desc: "Double support belt" },
    { name: "Lumbo Sacral Belt (Double Support) variant", image: sub722, desc: "Double support variant" },
    { name: "Lumbo Corset", image: sub723, desc: "Lumbar corset support" },
    { name: "Taylor's Brace", image: sub724, desc: "Taylor's spinal brace" },
    { name: "Lumbo Sacral Belt (Double Support)(Black)", image: sub725, desc: "Black double support belt" },
    { name: "Contoured Lumbo Sacral Support (Black)", image: sub726, desc: "Black contoured support" },
    { name: "Lumbo Lacepull Brace", image: sub727, desc: "Lacepull lumbo brace" },
    { name: "Posture Support (Sleek)", image: sub728, desc: "Sleek posture support" },
    { name: "Posture Corrector", image: sub729, desc: "Posture correction brace" },
    { name: "Lacepull LS Belt", image: sub730, desc: "Lacepull LS belt" },

  ],
},{
  id: 8,
  brand: "Samson",
  category: "Fracture Aids",
  image: fractureaids,
  desc: "Immobilization and fracture management products.",
  subproducts: [
    { name: "Universal Shoulder Immobilizer", image: sub81, desc: "CH, UNI, SPL sizes" },
    { name: "Elastic Shoulder Immobilizer", image: sub82, desc: "S, M, L, XL, XXL sizes" },
    { name: "Shoulder Support", image: sub83, desc: "Universal, SPL sizes" },
    { name: "Clavicle Brace", image: sub84, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Arm Sling Pouch (Baggy)", image: sub85, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Pouch Arm Sling (Tropical)", image: sub86, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Arm Immobilizer Adjustable", image: sub87, desc: "Universal size" },
    { name: "Cast Shoes", image: sub88, desc: "CH, S, M, L, XL sizes" },
    { name: "Cast Cover Arm", image: sub89, desc: "Universal size" },
    { name: "Cast Cover Leg", image: sub810, desc: "Universal size" },
    { name: "Shoulder Abduction Pillow", image: sub811, desc: "Universal size" },
    { name: "Arm Sling Strap", image: sub812, desc: "Universal size" },
    { name: "Humerus Brace", image: sub813, desc: "Universal size" },
    { name: "Heel Off-loading Shoes", image: sub814, desc: "S, M, L, XL sizes" },
    { name: "Forefoot Off-loading Shoes", image: sub815, desc: "S, M, L, XL sizes" },
  ],
},{
  id: 9,
  brand: "Samson",
  category: "Knee Support / Braces",
  image: orthopedic,
  desc: "Comprehensive knee support and bracing solutions.",
  subproducts: [
    { name: "Knee Brace/Immobilizer Long Type 19\"/48cm", image: sub91, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Brace/Immobilizer Short Type 14\"/36cm", image: sub92, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Elastic Knee Support", image: sub93, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Brace/Immobilizer Long Type 22\"/56cm", image: sub94, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Soft (Pair)", image: sub95, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Open Patella", image: sub96, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Rigid Hinged (Nylon Hinges)", image: sub97, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Hinged (Aluminium Hinges)", image: sub98, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Hinged with Patella Gel Pad", image: sub99, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap with Patella Ring (Single)", image: sub910, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Support Hinged Dry-Tex", image: sub911, desc: "S, M, L, XL, XXL sizes" },
    { name: "R.O.M Knee Brace 18\"/46cm", image: sub912, desc: "Universal size" },
    { name: "Knee Support Dry-Tex", image: sub913, desc: "Universal, SPL sizes" },
    { name: "Knee Cap Furo (Pair)", image: sub914, desc: "S, M, L, XL, XXL sizes" },
    { name: "R.O.M Knee Brace Height Adjustable", image: sub915, desc: "Universal size" },
    { name: "Gel Knee Cushion For Prayers (Pair)", image: sub916, desc: "S, M, L, XL, XXL sizes" },
    { name: "Functional Knee Support", image: sub917, desc: "S, M, L, XL, XXL sizes" },
  ],
},{
  id: 10,
  brand: "Samson",
  category: "Ankle Support / Braces",
  image: walkingaids,
  desc: "Ankle support, braces and splints for all needs.",
  subproducts: [
    { name: "Ankle Binder", image: sub101, desc: "S, M, L, XL sizes" },
    { name: "Anklet (Pair)", image: sub102, desc: "S, M, L, XL, XXL sizes" },
    { name: "Foot Drop Splint Right/Left with Liner", image: sub103, desc: "CH, S, M, L, XL sizes" },
    { name: "Ankle Splint", image: sub104, desc: "Universal size" },
    { name: "Ankle Brace", image: sub105, desc: "CH, S, M, L, XL sizes" },
    { name: "PF Night Splint", image: sub106, desc: "S, M, L sizes" },
    { name: "Dorsal Night Splint", image: sub107, desc: "S/M, L/XL sizes" },
    { name: "Ankle Support with Binder", image: sub108, desc: "S, M, L, XL, XXL sizes" },
    { name: "Air Ankle Splint", image: sub109, desc: "Universal size" },
    { name: "Gel Ankle Splint", image: sub1010, desc: "Universal size" },
    { name: "Foot Walker Boot with Airway", image: sub1011, desc: "S, M, L sizes" },
    { name: "R.O.M Foot Walker Boot", image: sub1012, desc: "S, M, L sizes" },
    { name: "Foot Walker Boot Short (With Airway)", image: sub1013, desc: "S, M, L sizes" },
    { name: "R.O.M Foot Walker Boot", image: sub1014, desc: "S, M, L sizes" },
    { name: "R.O.M Foot Walker Boot", image: sub1015, desc: "S, M, L sizes" },
  ],
},{
  id: 11,
  brand: "Samson",
  category: "Thigh & Calf Support / Varicose Vein Compression Stockings",
  image: orthopedic,
  desc: "Compression supports and medical stockings for circulation care.",
  subproducts: [
    { name: "Thigh Support (Pair)", image: sub111, desc: "TC-1101 S,M,L,XL,XXL sizes" },
    { name: "Calf Support (Pair)", image: sub112, desc: "TC-1102 S,M,L,XL,XXXL sizes" },
    { name: "Medical Compression Stockings Thigh High Class-I AG (Pair)", image: sub113, desc: "GS-1201 S,M,L,XL,XXL" },
    { name: "Medical Compression Stockings Knee High Class-II AD (Pair)", image: sub114, desc: "GS-1202 S,M,L,XL,XXL" },
    { name: "Anti-Embolism Stockings/DVT Thigh High AG (Pair)", image: sub115, desc: "GS-1203 S,M,L,XL,XXL" },
    { name: "Arthritis Compression Gloves", image: sub116, desc: "GS-1204 S,M,L,XL" },
    { name: "Lymphedema Arm Sleeve (Pair)", image: sub117, desc: "GS-1205 S,M,L,XL,XXL" },
    { name: "Graduated Compression Socks (Pair)", image: sub118, desc: "GS-1206 S,M,L,XL" },
    { name: "Graduated Compression Socks (Ankle Size) (Pair)", image: sub119, desc: "GS-1207 UNIVERSAL" },
    { name: "Medical Compression Stockings Thigh High Class-I AG (Pair)", image: sub1110, desc: "GS-1208 S,M,L,XL,XXL" },
    { name: "Medical Compression Stockings Knee High Class-I AD (Pair)", image: sub1111, desc: "GS-1209 S,M,L,XL,XXL" },
    { name: "Varicose Vein Stockings Classic (Pair)", image: sub1112, desc: "GS-1210 S,M,L,XL,XXL" },
    { name: "Varicose Vein Stockings Below Knee Classic (Pair)", image: sub1113, desc: "GS-1211 S,M,L,XL,XXL" },
    { name: "Compression Garment Face Open Hood", image: sub1114, desc: "GS-1212 UNIVERSAL,SPL" },
  ],
},
{
    id: 12,
    brand: "Samson",
    category: "Surgical Dressing",
      image: surgicaldressing,
    desc: "Professional surgical dressing products.",
    subproducts: [
  { name: "SAM POP Plaster of Paris Bandage", image: sub121, desc: "Plaster of paris bandage" },
  { name: "SAM PORE Microporous Paper Tape (5m & 9m)", image: sub122, desc: "5m & 9m variants" },
  { name: "Kinesiology Therapeutic Tape", image: sub123, desc: "Therapeutic kinesiology tape" },
  { name: "SAM CREPE Cotton Crepe Bandage", image: sub124, desc: "Cotton crepe bandage" },
  { name: "SAM NETT Stockinette", image: sub125, desc: "Tubular stockinette" },
  { name: "SAM PLAST Elastic Adhesive Bandage", image: sub126, desc: "Elastic adhesive bandage" },
  { name: "SAM FIX Cannula Fixator", image: sub127, desc: "Secure cannula fixation" },
  { name: "CAST PAD Soft Roll", image: sub128, desc: "Soft cast padding roll" },
],
  },
  {
    id: 13,
    brand: "Samson Sport",
    category: "Sport Gear",
     image: sportgear,
    desc: "Sports supports and gym protection products.",
    subproducts: [
  { name: "Abdominal Support", image: sub131, desc: "Core abdominal support" },
  { name: "Lumbo Sacral Support", image: sub132, desc: "Lower back support" },
  { name: "Weight Lifting Belt", image: sub133, desc: "Gym weight lifting belt" },
  { name: "Knee Support (Pair)", image: sub134, desc: "Active knee support pair" },
  { name: "Knee Support (Neoprene)", image: sub135, desc: "Neoprene knee support" },
  { name: "Knee Support with Strap", image: sub136, desc: "Knee support with strap" },
  { name: "Weight Lifting Knee Strap (Pair)", image: sub137, desc: "Knee strap for lifting" },
  { name: "Wrist Wrap with Thumb Loop (Pair)", image: sub138, desc: "Wrist wrap & thumb loop" },
  { name: "Wrist Support with Thumb Loop Neoprene (Pair)", image: sub139, desc: "Neoprene wrist support" },
  { name: "Tennis Elbow / Golf Support", image: sub1310, desc: "Elbow pain relief support" },
  { name: "Elbow Support With Strap", image: sub1311, desc: "Elbow support with strap" },
  { name: "Ankle Support With Strap", image: sub1312, desc: "Ankle support with strap" },
  { name: "Ankle Support (Neoprene)", image: sub1313, desc: "Neoprene ankle support" },
  { name: "Shoulder Support", image: sub1314, desc: "Shoulder compression support" },
  { name: "Finger Support", image: sub1315, desc: "Protective finger support" },
  { name: "Samgrip Gym Gloves", image: sub1316, desc: "Grip gym gloves" },
  { name: "Yoga Mat TPE", image: sub1317, desc: "Eco-friendly TPE yoga mat" },
  { name: "Dual Patella Support", image: sub1318, desc: "Dual patella knee support" },
  { name: "Knee Pad", image: sub1319, desc: "Protective knee pad" },
  { name: "Knee Support Copper Fit (Pair)", image: sub1320, desc: "Copper fit knee support" },
],
  },
  {
    id: 14,
    brand: "Samson Junior",
    category: "Junior / Paediatric Range",
     image: last,
    desc: "Healthcare and orthopaedic products for children.",
    subproducts: [
  { name: "Cervical Orthosis Philadelphia (Child)", image: sub141, desc: "Paediatric cervical support" },
  { name: "Cervical Collar Soft Firm Density (Child)", image: sub142, desc: "Soft firm density collar" },
  { name: "Universal Shoulder Immobilizer (Child)", image: sub143, desc: "Universal shoulder support" },
  { name: "Clavicle Brace (Child)", image: sub144, desc: "Paediatric clavicle brace" },
  { name: "Arm Sling Pouch (Child)", image: sub145, desc: "Comfortable arm sling" },
  { name: "Foot Drop Splint (Child)", image: sub146, desc: "Foot drop correction splint" },
  { name: "Ankle Brace (Child)", image: sub147, desc: "Paediatric ankle support" },
  { name: "Foot Walker Boot Short (Child)", image: sub148, desc: "Short foot walker boot" },
  { name: "Wrist Splint (Child)", image: sub149, desc: "Paediatric wrist splint" },
  { name: "Thumb Spica Splint (Child)", image: sub1410, desc: "Thumb spica support" },

  { name: "Knee Brace Immobilizer (Child)", image: sub1411, desc: "Knee immobilizer brace" },
  { name: "Knee Wrap Hinged (Child)", image: sub1412, desc: "Hinged knee wrap" },
  { name: "Skin Traction Set (Child)", image: sub1413, desc: "Paediatric skin traction" },
  { name: "Arch Support PU Gel (Child)", image: sub1414, desc: "PU gel arch support" },
  { name: "Flat Foot Insole Paediatric (Child)", image: sub1415, desc: "Flat foot correction insole" },
  { name: "Pavlik Harness", image: sub1416, desc: "Hip dysplasia harness" },
],
  },
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [modalProduct, setModalProduct] = useState(null);

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
  searchQuery.trim() === "" ||
  p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
  p.subproducts.some((item) =>
    (typeof item === "object" ? item.name : item)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
return matchCat && matchSearch;
  });

  return (
    <div className="products-page">
      <section className="products-hero">
        <p className="products-eyebrow">CATALOG</p>
        <h1 className="products-title">
          Our complete{" "}
          <span className="products-title-accent">
            healthcare product range
          </span>
        </h1>
        <p className="products-subtitle">
          Browse our extensive range of medical, surgical, orthopedic,
          rehabilitation and wellness products.
        </p>
      </section>

      <section className="products-controls">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search categories or products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="view-toggles">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              ⬜
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              ☰
            </button>
          </div>
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="products-grid-section">
        <div
          className={`products-grid ${
            viewMode === "list" ? "products-list" : ""
          }`}
        >
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card-img placeholder-card">
  {product.image ? (
    <img
      src={product.image}
      alt={product.category}
      className="product-image"
    />
  ) : (
    <div className="placeholder-icon">🏥</div>
  )}
</div>

              <div className="product-card-body">
                <p className="product-category-name">{product.category}</p>
                <p className="product-card-desc">{product.desc}</p>

                <div className="product-card-footer">
                  <button
                    className="btn-view-details"
                    onClick={() => setModalProduct(product)}
                  >
                    View Details →
                  </button>
                  <button className="btn-quote-icon" title="Request Quote">
                    💬
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">No products found.</div>
        )}
      </section>

      {/* MODAL */}
      {modalProduct && (
        <div
          className="modal-overlay"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="modal-eyebrow">{modalProduct.brand}</p>
                <h2>{modalProduct.category}</h2>
                <p className="modal-desc">{modalProduct.desc}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setModalProduct(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-products">
              <h4 className="modal-products-heading">Products Included</h4>
            <ul className="modal-subproducts-list">
  {modalProduct.subproducts.map((item, index) => (
    <li key={index} className="modal-subproduct-item">
      {typeof item === "object" && item.image && (
        <div className="modal-subproduct-img-wrap">
         <img
  src={item.image}
  alt={item.name}
  className={`modal-subproduct-img ${item.contain ? "modal-subproduct-img-contain" : ""}`}
/>
        </div>
      )}
      <p className="modal-subproduct-name">
        {typeof item === "object" ? item.name : item}
      </p>
      {typeof item === "object" && item.desc && (
        <p className="modal-subproduct-desc">{item.desc}</p>
      )}
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
