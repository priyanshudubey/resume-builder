import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";

// Register new fonts
Font.register({
  family: "Nunito",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/nunito/v20/XRXV3I6Li01BKofINeaB.woff2",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/nunito/v20/XRXV3I6Li01BKofINeaB.woff2",
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "Lato",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXjeu.woff2",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXjeu.woff2",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 30,
    fontSize: 11,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 10,
  },
  name: {
    fontSize: 28, // Increased font size for visibility
    fontFamily: "Lato",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#FA1E4E",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  contactItem: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  link: {
    textDecoration: "none",
    color: "#007acc",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Lato",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e43847",
    paddingBottom: 3,
    textTransform: "uppercase",
  },
  educationRow: {
    flexDirection: "row",
    justifyContent: "space-between", // Aligns left and right content
    marginBottom: 3, // Adjusts spacing between lines
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Lato",
  },
  entrySubtitle: {
    fontSize: 10,
    fontFamily: "Lato",
    color: "#777777",
    marginBottom: 5,
  },
  entryDates: {
    fontSize: 10,
    fontFamily: "Lato",
    color: "#777777",
  },
  text: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 5,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletContent: {
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const ResumePDF = ({ resumeData }) => {
  const { personalDetails, skills, experiences, education, projects } =
    resumeData || {};

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((desc, idx) => (
        <View
          key={idx}
          style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletContent}>{desc}</Text>
        </View>
      ));
    } else if (typeof description === "string") {
      return (
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletContent}>{description}</Text>
        </View>
      );
    }
    return null;
  };

  if (!resumeData) {
    return (
      <Document>
        <Page
          size="A4"
          style={styles.page}>
          <Text>Error: No resume data available</Text>
        </Page>
      </Document>
    );
  }
  console.log("Printing name: ", personalDetails.name);

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalDetails?.name || "Your Name"}
          </Text>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>
              {personalDetails?.phone || "Your Phone"}
            </Text>
            <Text style={styles.contactItem}>
              {personalDetails?.email || "Your Email"}
            </Text>
            <Text style={styles.contactItem}>
              {personalDetails?.location || "Your Location"}
            </Text>
          </View>
          <View style={styles.contact}>
            {personalDetails?.githubLink && (
              <Link
                style={styles.link}
                src={personalDetails.githubLink}>
                <Text style={styles.contactItem}>GitHub</Text>
              </Link>
            )}
            {personalDetails?.linkedinLink && (
              <Link
                style={styles.link}
                src={personalDetails.linkedinLink}>
                <Text style={styles.contactItem}>LinkedIn</Text>
              </Link>
            )}
            {personalDetails?.website && (
              <Link
                style={styles.link}
                src={personalDetails.website}>
                <Text style={styles.contactItem}>Portfolio</Text>
              </Link>
            )}
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Text style={{ color: "#FA1E4E" }}>Ski</Text>
            <Text>lls</Text>
          </Text>
          <Text>{skills?.length > 0 ? skills.join(" • ") : "Your Skills"}</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Text style={{ color: "#FA1E4E" }}>Pro</Text>
            <Text>fessional Experience</Text>
          </Text>
          {experiences?.map((exp, index) => (
            <View
              key={index}
              style={{ marginBottom: 10 }}>
              <Text style={styles.entryTitle}>
                {exp.position || "Position"}
              </Text>
              <Text style={styles.entrySubtitle}>
                {exp.company || "Company"} | {exp.dates || "Dates"}
              </Text>
              {renderDescription(exp.description)}
            </View>
          ))}
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Text style={{ color: "#FA1E4E" }}>Pro</Text>
            <Text>jects</Text>
          </Text>
          {projects?.map((project, index) => (
            <View
              key={index}
              style={{ marginBottom: 10 }}>
              <Text style={styles.entryTitle}>
                {project.name || "Project Name"}
              </Text>
              <Text style={styles.text}>
                {project.description || "Project description goes here."}
              </Text>
              {project.githubLink && (
                <Link
                  style={styles.link}
                  src={project.githubLink}>
                  <Text>GitHub</Text>
                </Link>
              )}
              {project.liveLink && (
                <Link
                  style={styles.link}
                  src={project.liveLink}>
                  <Text>Live Demo</Text>
                </Link>
              )}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Text style={{ color: "#FA1E4E" }}>Edu</Text>
            <Text>cation</Text>
          </Text>
          {education.map((edu, index) => (
            <View
              key={index}
              style={styles.educationEntry}>
              {/* First line: Qualification and University with expected date */}
              <View style={styles.educationRow}>
                <Text style={styles.entryTitle}>
                  {edu.qualification}, {edu.institute}
                </Text>
                <Text style={styles.entryDates}>
                  {edu.endYear === "Present"
                    ? `Expected ${edu.endYear}`
                    : edu.startYear + " - " + edu.endYear}
                </Text>
              </View>

              {/* Second line: Field of Study and Grade */}
              <View style={styles.educationRow}>
                <Text style={styles.entrySubtitle}>{edu.fieldOfStudy}</Text>
                <Text style={styles.entrySubtitle}>Grade: {edu.grade}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
