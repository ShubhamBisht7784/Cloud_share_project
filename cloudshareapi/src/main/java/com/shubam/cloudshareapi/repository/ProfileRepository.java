package com.shubam.cloudshareapi.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.shubam.cloudshareapi.documents.ProfileDocument;


public interface ProfileRepository extends MongoRepository<ProfileDocument,String > {
    Optional<ProfileDocument> findByEmail(String email);
    ProfileDocument findByClerkId(String clerkId);
    Boolean existsByClerkId(String clerkId);
}
