import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  address: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  item: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  bulletPoint: {
    marginLeft: 10,
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
});

const ResumePDF = ({ resumeData }) => (
  <Document>
    <Page
      size="A4"
      style={styles.page}>
      <View>
        <Text style={styles.name}>{resumeData.personalDetails.name}</Text>
        <Text style={styles.address}>
          {resumeData.personalDetails.phone}
          {"\n"}
          {resumeData.personalDetails.location}
          {"\n"}
          {resumeData.personalDetails.email}
        </Text>
        <Text style={styles.address}>
          <Link
            style={styles.link}
            src={resumeData.personalDetails.githubLink}>
            {resumeData.personalDetails.githubLink}
          </Link>{" "}
          {"| "}
          <Link
            style={styles.link}
            src={resumeData.personalDetails.linkedinLink}>
            {resumeData.personalDetails.linkedinLink}
          </Link>{" "}
          {"| "}
          <Link
            style={styles.link}
            src={resumeData.personalDetails.website}>
            {resumeData.personalDetails.website}
          </Link>
        </Text>
      </View>

      {/* Objective Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective</Text>
        <Text>{resumeData.objective}</Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {resumeData.education.map((edu, index) => (
          <Text
            key={index}
            style={styles.item}>
            <Text style={styles.bold}>{edu.degree}</Text>, {edu.institute}{" "}
            <Text style={styles.italic}>{edu.year}</Text>
          </Text>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>{resumeData.skills.join(", ")}</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {resumeData.experiences.map((exp, index) => (
          <View key={index}>
            <Text style={styles.item}>
              <Text style={styles.bold}>{exp.company}</Text> -{" "}
              <Text style={styles.italic}>{exp.position}</Text>{" "}
              <Text style={styles.italic}>{exp.dates}</Text>
            </Text>
            {exp.description.map((desc, idx) => (
              <Text
                key={idx}
                style={styles.bulletPoint}>
                • {desc}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
